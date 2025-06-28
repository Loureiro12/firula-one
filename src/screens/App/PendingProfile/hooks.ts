import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useState } from "react";

export const usePendingProfile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

  const [loadingData, _] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
    loadingData
  };
};
