import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useAuthStore } from "src/store/authStore";
import { Alert, Linking } from "react-native";

export const useAdjustments = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user } = useAuthStore();

  const handleNavigationToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const callWhatsApp = async () => {
    const whatsappNumber = `553184491335`;
    const whatsappUrl = `whatsapp://send?phone=${whatsappNumber}`;
    const webUrl = `https://wa.me/${whatsappNumber}`;

    try {
      const canOpen = await Linking.canOpenURL(whatsappUrl);

      if (canOpen) {
        await Linking.openURL(whatsappUrl);
      } else {
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error("Erro ao abrir WhatsApp:", error);
      Alert.alert("Erro", "Não foi possível abrir o WhatsApp");
    }
  };

  return {
    handleNavigationToEditProfile,
    user,
    callWhatsApp,
  };
};
