import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "@navigation/types";
import { Alert } from "react-native";
import { useAuthStore } from "src/store/authStore";
import { FormData } from "./types";

export const useSignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();
  const { register, isLoading } = useAuthStore();
  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
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
    try {
      setSubmitted(true);

      await register({
        name: `${formData.name} ${formData.lastName}`.trim(),
        email: formData.email,
        password: formData.password,
        document: formData.document,
        phone: formData.phone,
      });
      reset();
    } catch (error: any) {
      if (error.code === "EMAIL_EXISTS") {
        setError("email", {
          type: "manual",
          message: "Este email já está cadastrado",
        });
      } else {
        Alert.alert(
          "Erro no cadastro",
          error.message || "Ocorreu um erro ao realizar o cadastro"
        );
      }
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
