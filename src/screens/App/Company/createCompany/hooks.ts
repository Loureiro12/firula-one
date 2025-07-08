// src/screens/CreateCompanyScreen/hooks.ts
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import { AppTabStackParamList } from "@navigation/types";
import { CompanyService } from "src/api/companyService";
import { useAuthStore } from "src/store/authStore";

type FormData = {
  cnpj: string;
  tradeName: string;
  corporateName: string;
  regime: string;
  openingDate: string;
  phone: string;
  description: string;
};

export const useCreateCompany = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user } = useAuthStore();

  const [submitted, setSubmitted] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      cnpj: "",
      tradeName: "",
      corporateName: "",
      regime: "",
      openingDate: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitted(true);

      const sendData = {
        name: data.tradeName,
        cpfCnpj: data.cnpj.replace(/\D/g, ""),
        mobilePhone: data.phone.replace(/\D/g, ""),
        fantasy_name: data.tradeName,
        corporate_reason: data.corporateName,
        regime: data.regime,
        opening_date: data.openingDate.replace(/\D/g, ""),
        imageUrl: "",
        description: data.description,
        typeDocument: "CNPJ",
      };

      const response = await CompanyService.create(user?.id || "", sendData);

      if (response.message) {
        Alert.alert("Sucesso", response.message);
      } else {
        Alert.alert("Sucesso", "Empresa cadastrada com sucesso!");
      }

      reset();
      navigation.goBack();
    } catch (error: any) {
      console.error("Error during company creation:", error);
      Alert.alert(
        "Ocorreu um erro no cadastro de empresa",
        error.message || "Ocorreu um erro ao cadastrar a empresa"
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
    handleGoBack,
  };
};
