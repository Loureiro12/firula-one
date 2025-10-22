import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";

export const useMainHelpCenter = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
  };
};
