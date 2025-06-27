import { useForm } from "react-hook-form";
import { FormData } from "./types";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "@navigation/auth.routes";

export const useSignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRootStackParamList>>();

  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      document: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
  };

  const handleNavigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return {
    control,
    errors,
    handleSubmit,
    isSubmitting,
    isValid,
    onSubmit,
    setSubmitted,
    submitted,
    handleNavigateToSignIn,
  };
};
