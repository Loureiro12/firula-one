import { useForm } from "react-hook-form";
import { usePostHog } from "posthog-react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "@navigation/types";
import { useAuthStore } from "src/store/authStore";
import { Alert } from "react-native";

type FormData = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();
  const posthog = usePostHog();
  const { login } = useAuthStore();

  const [submitted, setSubmitted] = useState(false);

  const handleNavigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      posthog.capture("user_sign_in", {
        user_email: data.email,
      });

      setSubmitted(true);

      await login({
        email: data.email,
        password: data.password,
      });
      reset();
    } catch (error: any) {
      console.error("Error during sign in:", error);
      Alert.alert(
        "Ocorreu um erro no login",
        error.message || "Ocorreu um erro ao realizar o cadastro"
      );
    } finally {
      setSubmitted(false);
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    submitted,
    setSubmitted,
    onSubmit,
    handleNavigateToSignUp,
  };
};
