import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";

export const useHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

  const [isLoading, setIsLoading] = useState(true);

  const handleNavigateToValidateReservations = () => {
    navigation.navigate("ValidateReservations");
  };

  const handleNavigateToPendingProfile = () => {
    navigation.navigate("PendingProfileScreen");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return {
    isLoading,
    handleNavigateToValidateReservations,
    handleNavigateToPendingProfile,
  };
};
