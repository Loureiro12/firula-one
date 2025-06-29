import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "@navigation/types";
import { Alert } from "react-native";
import { useAuthStore } from "src/store/authStore";
import { FormData } from "./types";
import { removeMask } from "src/utils/function";

export const useSignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();
  const { register, isLoading } = useAuthStore();
  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      document: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (formData: FormData) => {
    console.log("Form Data:", formData);
    try {
      setSubmitted(true);

      if (formData.password !== formData.confirmPassword) {
        Alert.alert(
          "Erro no cadastro",
          "As senhas não coincidem. Por favor, verifique e tente novamente."
        );
        return;
      }

      await register({
        name: `${formData.name} ${formData.lastName}`.trim(),
        email: formData.email,
        password: formData.password,
        document: removeMask(formData.document),
        phone: removeMask(formData.phone),
      });
      reset();
    } catch (error: any) {
      console.error("Error during registration:", error);
      Alert.alert(
        "Erro no cadastro",
        error.message || "Ocorreu um erro ao realizar o cadastro"
      );
    } finally {
      setSubmitted(false);
    }
  };

  const handleNavigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    isSubmitting: isLoading || submitted,
    isValid,
    onSubmit,
    submitted,
    handleNavigateToSignIn,
  };
};
