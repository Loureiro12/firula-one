import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { UserService } from "src/api/userService";
import { useAuthStore } from "src/store/authStore";

export const useHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user } = useAuthStore();

  const [isLoading, setIsLoading] = useState(true);
  const [hasProfileIssues, setHasProfileIssues] = useState(false);

  const handleNavigateToValidateReservations = () => {
    navigation.navigate("ValidateReservations");
  };

  const handleNavigateToPendingProfile = () => {
    navigation.navigate("PendingProfileScreen");
  };

  const loadAccountStatus = async () => {
    try {
      setIsLoading(true);

      const responseLoadAccountStatus = await UserService.getUserStatus(
        user?.id ?? ""
      );

      console.log('responseLoadAccountStatus', responseLoadAccountStatus)

      if (responseLoadAccountStatus.pendingData.length > 0) {
        setHasProfileIssues(true)
      }
      setIsLoading(false);

    } catch (error) {
      console.log('error', error)
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadAccountStatus();
    }, [])
  );

  return {
    isLoading,
    handleNavigateToValidateReservations,
    handleNavigateToPendingProfile,
    loadAccountStatus,
    hasProfileIssues,
  };
};
