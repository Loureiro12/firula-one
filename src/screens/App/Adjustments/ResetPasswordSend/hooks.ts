import { AppTabStackParamList } from "@navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo, useState } from "react";
import { Alert } from "react-native";
import { UserService } from "src/api/userService";
import { useAuthStore } from "src/store/authStore";

export const useResetPasswordSend = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const user = useAuthStore((s) => s.user);
  const [loading, setLoading] = useState(false);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const maskedTo = useMemo(() => {
    if (!user) return "(--) ------ ----";
    const phone = user.mobilePhone || user.mobilePhone || user.email || "";
    const last = phone.slice(-4);
    return `****${last}`;
  }, [user]);

  const handleSendToken = useCallback(async () => {
    if (!user) return;
    try {
      setLoading(true);
      const resp = await UserService.resetPasswordSendToken(
        user.cpf || user.mobilePhone || ""
      );
      navigation.navigate("ResetPasswordConfirm", {
        userId: resp.userId,
        maskedTo,
      });
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível enviar o token. Verifique suas informações e tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }, [navigation, user, maskedTo]);

  return { maskedTo, loading, handleSendToken, handleGoBack };
};
