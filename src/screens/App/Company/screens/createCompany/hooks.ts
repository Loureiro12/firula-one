import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import { AppTabStackParamList } from "@navigation/types";
import { CompanyService } from "src/api/companyService";
import { useAuthStore } from "src/store/authStore";
import { uploadImage } from "src/utils/function";
import * as ImagePicker from "expo-image-picker";
import { useCompanyStore } from "src/store";

type FormData = {
  cnpj: string;
  tradeName: string;
  corporateName: string;
  regime: string;
  openingDate: string;
  phone: string;
  description: string;
  imageUrl: string;
};

export const useCreateCompany = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user } = useAuthStore();
  const { setCompanyId } = useCompanyStore();
    const { companyId } = useCompanyStore();


  const [submitted, setSubmitted] = useState(false);

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

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

      let imageCompanyUrl = "";

      if (imageUri) {
        try {
          imageCompanyUrl = await uploadImage(
            data.tradeName,
            imageUri,
            "_company"
          );
        } catch (error) {
          console.error("Erro ao fazer upload da imagem:", error);
          Alert.alert(
            "Aviso",
            "Erro ao fazer upload da imagem. A empresa será criada sem imagem."
          );
        }
      }

      const sendData = {
        name: data.tradeName,
        cpfCnpj: data.cnpj.replace(/\D/g, ""),
        mobilePhone: data.phone.replace(/\D/g, ""),
        fantasy_name: data.tradeName,
        corporate_reason: data.corporateName,
        regime: data.regime,
        opening_date: data.openingDate.replace(/\D/g, ""),
        imageUrl: imageCompanyUrl,
        description: data.description,
        typeDocument: "CNPJ",
      };

      const response = await CompanyService.create(user?.id || "", sendData);

      if (response.companyId) {
        setCompanyId(response.companyId);
        
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const successMessage = response.message || "Empresa cadastrada com sucesso!";
        
        Alert.alert(
          "Sucesso", 
          successMessage,
          [
            {
              text: "OK",
              onPress: () => {
                setSubmitted(false);
                reset();
                setImageUri(null);
                console.log('🔄 Navegando de volta para PendingProfile...');
                navigation.goBack();
              }
            }
          ]
        );
      } else {
        Alert.alert("Erro", "Não foi possível obter o ID da empresa criada.");
      }
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
    onSubmit,
    handleGoBack,
    handlePickImage,
    imageUri,
    uploading,
    setUploading,
  };
};
