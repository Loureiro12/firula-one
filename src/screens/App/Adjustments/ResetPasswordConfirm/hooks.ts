import { AuthRootStackParamList } from "@navigation/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { UserService } from "src/api/userService";
import { useAuthStore } from "src/store/authStore";

type FormData = {
  code: string;
  newPassword: string;
  confirmPassword: string;
};

type ResetPasswordConfirmRouteProp = RouteProp<AuthRootStackParamList, 'ResetPasswordConfirm'>;

export const useResetPasswordConfirm = () => {
  const navigation = useNavigation();
  const route = useRoute<ResetPasswordConfirmRouteProp>();
  const { userId } = (route.params || {}) as { userId?: string };
  const { control, handleSubmit } = useForm<FormData>();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSubmit = handleSubmit(async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      Alert.alert("Senhas diferentes", "As senhas não coincidem.");
      return;
    }

    try {
      const resp = await UserService.resetPasswordConfirm({
        userId: userId || "",
        newPassword: data.newPassword,
        code: data.code,
      });

      if (resp.success) {
        Alert.alert("Sucesso", "Senha alterada com sucesso.", [
          {
            text: "OK",
            onPress: () => {
              // show success message then logout
              useAuthStore.getState().logout();
              // navigate to login (assumes auth flow will be presented by root)

              if (route.params.flow === 'signIn') {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "SignIn" }],
                });
              }
            }
          }
        ]);
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao alterar a senha.");
      // TODO: handle error
    }
  });

  return { control, onSubmit, loading: false, handleGoBack };
};
