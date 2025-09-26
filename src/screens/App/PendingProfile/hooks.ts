import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useCallback, useState } from "react";
import { UserService } from "src/api/userService";
import { useAuthStore } from "src/store/authStore";
import { IGetUserStatusResponse } from "src/api/types/userServices.types";
import { Alert } from "react-native";

export const usePendingProfile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user } = useAuthStore();

  const [loadingData, setLoadingData] = useState(true);
  const [hasProfileIssues, setHasProfileIssues] =
    useState<IGetUserStatusResponse>();
  const [error, setError] = useState<string | null>(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName);
  };

  const loadAccountStatus = async () => {
    try {
      setLoadingData(true);

      console.log('#### user?.id',  user?.id);

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

  return {
    handleGoBack,
    loadingData,
    hasProfileIssues,
    error,
    loadAccountStatus,
    handleNavigation,
  };
};
