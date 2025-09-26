import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AddressService } from "../../../../../api/addressService";
import { CompanyService } from "src/api/companyService";
import { Alert } from "react-native";
import { useCompanyStore } from "src/store";

type FormData = {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

export const useAddNewCompanyAddress = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { companyId } = useCompanyStore();

  const [submitted, setSubmitted] = useState(false);
  const [showAddressFields, setShowAddressFields] = useState(false);
  const [isSearchingCep, setIsSearchingCep] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues,
    watch,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
    mode: "onChange",
  });

  const zipCodeValue = watch("zipCode");

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSearchCep = async () => {
    const zipCode = getValues("zipCode");

    if (!AddressService.validateCep(zipCode)) {
      return;
    }

    setIsSearchingCep(true);

    try {
      const address = await AddressService.getAddressByCep(zipCode);

      if (address.logradouro || address.localidade) {
        setValue("street", address.logradouro || "");
        setValue("neighborhood", address.bairro || "");
        setValue("city", address.localidade || "");
        setValue("state", address.uf || "");

        setShowAddressFields(true);
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    } finally {
      setIsSearchingCep(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setSubmitted(true);

    try {
      const addressData = {
        street: data.street,
        number: data.number,
        complement: data.complement,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode.replace(/[^0-9]/g, ""),
      };

      console.log('companyId', companyId);

      await CompanyService.addNewCompanyAddress({
        companyId: companyId ?? "",
        addressData,
      });

      Alert.alert("Sucesso", "Endereço cadastrado com sucesso!");

      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o endereço.");
      console.error("Erro ao salvar endereço:", error);
    }
  };

  const handleCepChange = (text: string) => {
    setValue("zipCode", text);

    // Ocultar campos se CEP for limpo
    if (!text) {
      setShowAddressFields(false);
      // Limpar campos de endereço
      setValue("street", "");
      setValue("number", "");
      setValue("complement", "");
      setValue("neighborhood", "");
      setValue("city", "");
      setValue("state", "");
    }
  };

  return {
    control,
    errors,
    submitted,
    isValid,
    handleSubmit,
    onSubmit,
    handleGoBack,
    showAddressFields,
    isSearchingCep,
    handleSearchCep,
    handleCepChange,
    zipCodeValue,
  };
};
