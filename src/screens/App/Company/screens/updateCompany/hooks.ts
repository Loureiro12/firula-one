import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import { AppTabStackParamList } from "@navigation/types";
import { CompanyService } from "src/api/companyService";
import { ICompany } from "src/api/types/companyService.types";
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "src/utils/function";

type UpdateCompanyRouteProp = RouteProp<AppTabStackParamList, "UpdateCompany">;

type FormData = {
  cnpj: string;
  tradeName: string;
  corporateName: string;
  regime: string;
  openingDate: string;
  phone: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
};

export const useUpdateCompany = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const route = useRoute<UpdateCompanyRouteProp>();
  const companyId = route.params?.companyId;

  const [loading, setLoading] = useState(true);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [initialImageUrl, setInitialImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [imageChanged, setImageChanged] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
    setValue,
    watch,
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
      isActive: true,
    },
  });

  useEffect(() => {
    const load = async () => {
      if (!companyId) {
        Alert.alert("Erro", "ID da empresa não fornecido");
        navigation.goBack();
        return;
      }

      try {
        setLoading(true);
        const response = await CompanyService.getCompanyById(companyId);
        const company = response?.company
        if (!company) {
          Alert.alert("Erro", "Empresa não encontrada");
          navigation.goBack();
          return;
        }

        // Preencher formulario
        setValue("cnpj", company.cpf_cnpj || "");
        setValue("tradeName", company.name || "");
        setValue("corporateName", company.corporateReason || "");
        setValue("regime", company.regime || "");
        setValue("openingDate", company.openingDate || "");
        setValue("phone", company.mobilePhone || "");
        setValue("description", company.description || "");
  setValue("isActive", company.isActive ?? true);

        if (company.imageUrl) {
          const base = "https://pub-ed847887b3d7415384bbf5488c674561.r2.dev/";
          setInitialImageUrl(company.imageUrl);
          setImageUri(`${base}${company.imageUrl}`);
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Não foi possível carregar os dados da empresa.");
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [companyId]);

  const watchedIsActive = watch("isActive");

  const handleActiveChange = (isActive: boolean) => {
    setValue("isActive", isActive, { shouldValidate: true });
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
      setImageChanged(true);
    }
  };

  const handleGoBack = () => navigation.goBack();

  const onSubmit = async (data: FormData) => {
    if (!companyId) return;

    try {
      setSubmitted(true);

      let finalImageUrl: string | undefined = undefined;

      // Fazer upload da nova imagem somente se foi alterada
      if (imageChanged && imageUri) {
        setUploading(true);
        try {
          finalImageUrl = await uploadImage("empresa", imageUri, Date.now().toString());
        } catch (uploadError) {
          console.error("Erro no upload da imagem:", uploadError);
          Alert.alert("Erro", "Erro ao fazer upload da imagem. Tente novamente.");
          return;
        } finally {
          setUploading(false);
        }
      }

      const updateData: any = {
        isActive: data.isActive,
        mobilePhone: data.phone,
        description: data.description,
      };

      if (finalImageUrl) {
        updateData.imageUrl = finalImageUrl;
      }

      await CompanyService.updateCompany(companyId, updateData);

      Alert.alert("Sucesso", "Empresa atualizada com sucesso.", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      console.error("Erro ao atualizar empresa:", error);
      Alert.alert("Erro", "Ocorreu um erro ao atualizar a empresa. Tente novamente.");
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    submitted,
    onSubmit,
    handleGoBack,
    handlePickImage,
    imageUri,
    uploading,
    loading,
    watchedIsActive,
    handleActiveChange,
  };
};
