import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useCallback, useState, useEffect } from "react";
import { UserService } from "src/api/userService";
import { useAuthStore } from "src/store/authStore";
import { useCompanyStore } from "src/store/companyStore";
import { IGetUserStatusResponse } from "src/api/types/userServices.types";
import { Alert } from "react-native";

export const usePendingProfile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user } = useAuthStore();
  const { companyId } = useCompanyStore();

  const [loadingData, setLoadingData] = useState(true);
  const [hasProfileIssues, setHasProfileIssues] =
    useState<IGetUserStatusResponse>();
  const [error, setError] = useState<string | null>(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigation = (routeName: string) => {
    // Fazer cast para o tipo correto - a API retorna string
    // navigation.navigate(routeName as keyof AppTabStackParamList);
    // TO_DO: remover quando finalizar conexão com backend
    navigation.navigate('CourtOpeningHours')
  };

  const loadAccountStatus = async () => {
    try {
      setLoadingData(true);

      const responseLoadAccountStatus = await UserService.getUserStatus(
        user?.id ?? ""
      );

      setError(null);

      if (responseLoadAccountStatus.pendingData.length > 0) {
        setHasProfileIssues(responseLoadAccountStatus);
      }
    } catch (error) {
      setError("Não foi possível carregar o status da conta.");
      Alert.alert(
        "Occoreu um erro",
        "Não foi possível carregar o status da sua conta. Tente novamente mais tarde."
      );
    } finally {
      setLoadingData(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadAccountStatus();
    }, [])
  );

  // Recarrega quando o companyId muda
  useEffect(() => {
    if (companyId) {
      loadAccountStatus();
    }
  }, [companyId]);

  return {
    handleGoBack,
    loadingData,
    hasProfileIssues,
    error,
    loadAccountStatus,
    handleNavigation,
  };
};
