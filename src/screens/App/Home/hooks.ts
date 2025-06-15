import { AppTabStackParamList } from "@navigation/app.routes";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

  const [isLoading, setIsLoading] = useState(true);

  const handleNavigateToValidateReservations = () => {
    navigation.navigate("ValidateReservations");
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
  };
};
