import { useState, useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useOpeningHoursForm } from "../../../../../hooks/useOpeningHoursForm";
import { openingHoursLocales } from "./locales";
import { BlockService } from "src/api/blockService";
import { IOpeningHoursType } from "src/api/types/blockService.types";

interface UseCourtOpeningHoursOptions {
  companyBlockId?: string;
}

export const useCourtOpeningHours = (
  options: UseCourtOpeningHoursOptions = {}
) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

  // Pegar parâmetros da rota usando o tipo correto
  const route =
    useRoute<RouteProp<AppTabStackParamList, "CourtOpeningHours">>();
  const routeCompanyBlockId = route.params.companyBlockId;

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const {
    schedules,
    errors,
    stats,
    toggleDay,
    addTimeSlot,
    updateTimeSlot,
    removeTimeSlot,
    validateForm,
    resetForm,
  } = useOpeningHoursForm();

  // Mapear números dos dias para nomes em inglês
  const dayOfWeekMap = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
  } as const;

  // Função para converter valor monetário mascarado para centavos
  const convertPriceToNumber = (price: string): string => {
    if (!price) return "";

    // Remove tudo que não é dígito ou vírgula/ponto
    const cleaned = price.replace(/[^\d,\.]/g, "");
    // Substitui vírgula por ponto para parseFloat
    const normalized = cleaned.replace(",", ".");
    const value = parseFloat(normalized) || 0;

    // Converte para centavos (multiplica por 100)
    return Math.round(value * 100).toString();
  };

  // Função para transformar os dados no formato da API
  const transformSchedulesToAPI = () => {
    const openingHours: IOpeningHoursType[] = [];

    schedules.forEach((schedule) => {
      if (!schedule.isOpen || schedule.timeSlots.length === 0) return;

      schedule.timeSlots.forEach((timeSlot) => {
        // Pular slots inválidos
        if (
          !timeSlot.startHour ||
          !timeSlot.startMinute ||
          !timeSlot.endHour ||
          !timeSlot.endMinute
        )
          return;

        const startTime = `${timeSlot.startHour.padStart(
          2,
          "0"
        )}:${timeSlot.startMinute.padStart(2, "0")}`;
        const endTime = `${timeSlot.endHour.padStart(
          2,
          "0"
        )}:${timeSlot.endMinute.padStart(2, "0")}`;

        openingHours.push({
          dayOfWeek:
            dayOfWeekMap[schedule.dayOfWeek as keyof typeof dayOfWeekMap],
          startTime,
          endTime,
          active: true,
          valueForHourDayUse: timeSlot.dayUse
            ? convertPriceToNumber(timeSlot.dayUsePrice)
            : "",
          dayUseActive: timeSlot.dayUse,
          priceForHour: timeSlot.dayUse
            ? ""
            : convertPriceToNumber(timeSlot.price),
        });
      });
    });

    return {
      companyBlockId: routeCompanyBlockId || options.companyBlockId,
      openingHours,
    };
  };

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSave = useCallback(async () => {
    const validation = validateForm();

    if (!validation.isValid) {
      Alert.alert("Erro de validação", "Corrija os erros antes de continuar.");
      return;
    }

    if (stats.openDays === 0) {
      Alert.alert("Erro", openingHoursLocales.validation.minOneOpenDay);
      return;
    }

    setIsSaving(true);

    try {
      const apiData = transformSchedulesToAPI();

      if (!apiData.companyBlockId) {
        Alert.alert("Erro", "O identificador do bloco da empresa é obrigatório.");
        setIsSaving(false);
        return;
      }

      await BlockService.createBlockOpeningHours({
        ...apiData,
        companyBlockId: apiData.companyBlockId as string,
      });

      Alert.alert("Sucesso", openingHoursLocales.success.saved);
      handleGoBack();
    } catch (error) {
      Alert.alert("Erro", openingHoursLocales.errors.saveFailed);
    } finally {
      setIsSaving(false);
    }
  }, [validateForm, stats.openDays, handleGoBack, transformSchedulesToAPI]);

  const handleReset = useCallback(() => {
    Alert.alert(
      openingHoursLocales.alerts.resetForm.title,
      openingHoursLocales.alerts.resetForm.message,
      [
        {
          text: openingHoursLocales.alerts.resetForm.cancel,
          style: "cancel",
        },
        {
          text: openingHoursLocales.alerts.resetForm.confirm,
          style: "destructive",
          onPress: resetForm,
        },
      ]
    );
  }, [resetForm]);

  // Computed values
  const hasSchedules = stats.openDays > 0;
  const canSave = stats.isComplete && !isSaving;

  return {
    // States
    isLoading,
    isSaving,
    // Form data and functions
    schedules,
    errors,
    stats,
    toggleDay,
    addTimeSlot,
    updateTimeSlot,
    removeTimeSlot,
    validateForm,
    resetForm,
    // Actions
    handleGoBack,
    handleSave,
    handleReset,
    // Computed values
    hasSchedules,
    canSave,
  };
};
