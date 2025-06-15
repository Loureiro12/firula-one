import { AppTabStackParamList } from "@navigation/app.routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useValidateReservations = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
  };
};
