import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useAuthStore } from "src/store/authStore";

export const useCompany = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user } = useAuthStore();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack
  };
};
