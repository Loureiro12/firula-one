import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";

import { useAuthStore } from "src/store/authStore";

import { FormData } from "./types";
import { removeMask } from "src/utils/function";

export const useEditProfile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user, updateUser } = useAuthStore();

  const [submitted, setSubmitted] = useState(false);

  const defaultValues = useMemo(
    () => ({
      name: user?.name.split(" ")[0] || "",
      lastName: user?.name.split(" ")[1] || "",
      email: user?.email || "",
      document: user?.cpf || "",
      phone: user?.mobilePhone || "",
    }),
    [user]
  );

  const handleGoBack = () => {
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid, dirtyFields },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues,
  });

  const hasChanges = useMemo(() => {
    const currentValues = watch();
    return Object.keys(defaultValues).some(
      (key) =>
        currentValues[key as keyof FormData] !==
        defaultValues[key as keyof typeof defaultValues]
    );
  }, [watch(), defaultValues]);

  const onSubmit = async (formData: FormData) => {
    console.log("Form Data:", formData);
    try {
      setSubmitted(true);

      const updatedData = {
        name: `${formData.name} ${formData.lastName}`,
        phone: removeMask(formData.phone),
      };

      await updateUser(updatedData);

      Alert.alert(
        "Perfil atualizado com sucesso!",
        "Seu perfil foi atualizado com sucesso.",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.goBack();
            },
          },
        ]
      );
    } catch (error: any) {
      console.error("Error during update user:", error);
      Alert.alert(
        "Erro ao atualizar perfil",
        error.message || "Ocorreu um erro ao atualizar o perfil"
      );
    } finally {
      setSubmitted(false);
    }
  };

  return {
    handleGoBack,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
    submitted,
    isSubmitting: submitted,
    hasChanges, // Adicionamos esta propriedade
  };
};
