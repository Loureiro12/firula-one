import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { AppTabStackParamList } from "@navigation/types";
import { MultiSelectOption } from "@components/atoms/MultiSelect/types";
import { SingleSelectOption } from "@components/atoms/SingleSelect/types";
import { BlockService } from "src/api/blockService";
import { useCompanyStore } from "src/store/companyStore";
import { ITypeBlock } from "src/api/types/blockService.types";
import { uploadImage } from "src/utils/function";

interface CreateCourtFormData {
  name: string;
  sports: string[];
  courtType: string;
  valueForHour: string;
}

export const useCreateNewCourt = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { companyId } = useCompanyStore();

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [courtTypes, setCourtTypes] = useState<ITypeBlock[]>([]);
  const [loadingCourtTypes, setLoadingCourtTypes] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    reset,
  } = useForm<CreateCourtFormData>({
    defaultValues: {
      name: "",
      sports: [],
      courtType: "",
      valueForHour: "",
    },
    mode: "onChange",
  });

  const watchedSports = watch("sports");
  const watchedCourtType = watch("courtType");

  // Opções para esportes (seleção múltipla)
  const sportsOptions: MultiSelectOption[] = [
    { id: "1", label: "Futebol", value: "futebol" },
    { id: "2", label: "Basquete", value: "basquete" },
    { id: "3", label: "Tênis", value: "tenis" },
    { id: "4", label: "Vôlei", value: "volei" },
    { id: "5", label: "Futsal", value: "futsal" },
    { id: "6", label: "Handebol", value: "handebol" },
    { id: "7", label: "Vôlei de Praia", value: "volei_praia" },
    { id: "8", label: "Padel", value: "padel" },
  ];

  // Opções para tipo de quadra vindas da API
  const courtTypeOptions: SingleSelectOption[] = courtTypes.map((type) => ({
    id: type.id,
    label: type.name,
    value: type.id,
  }));

  // Carregar tipos de quadra da API
  useEffect(() => {
    const loadCourtTypes = async () => {
      try {
        setLoadingCourtTypes(true);
        const response = await BlockService.getTypeBlock();
        setCourtTypes(response.typeBlock);
      } catch (error) {
        console.error("Erro ao carregar tipos de quadra:", error);
        Alert.alert(
          "Erro",
          "Não foi possível carregar os tipos de quadra. Tente novamente."
        );
      } finally {
        setLoadingCourtTypes(false);
      }
    };

    loadCourtTypes();
  }, []);

  const handlePickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permissão necessária",
          "Precisamos de acesso à sua galeria de fotos para adicionar uma imagem da quadra."
        );
        return;
      }

      Alert.alert("Selecionar Imagem", "Escolha uma opção:", [
        {
          text: "Galeria",
          onPress: () => pickImageFromGallery(),
        },
        {
          text: "Câmera",
          onPress: () => pickImageFromCamera(),
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]);
    } catch (error) {
      console.error("Erro ao solicitar permissão:", error);
    }
  };

  const pickImageFromGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Erro ao selecionar imagem da galeria:", error);
    }
  };

  const pickImageFromCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permissão necessária",
          "Precisamos de acesso à sua câmera para tirar uma foto da quadra."
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Erro ao tirar foto:", error);
    }
  };

  const handleSportsChange = (selectedSports: string[]) => {
    setValue("sports", selectedSports, { shouldValidate: true });
  };

  const handleCourtTypeChange = (selectedType: string) => {
    setValue("courtType", selectedType, { shouldValidate: true });
  };

  const onSubmit = async (data: CreateCourtFormData) => {
    try {
      setSubmitted(true);
      setUploading(true);

      if (!companyId) {
        Alert.alert("Erro", "Empresa não selecionada. Tente novamente.");
        return;
      }

      let imageBlockUrl = "";

      if (imageUri) {
        try {
          imageBlockUrl = await uploadImage(imageUri, imageUri, '_block');
        } catch (error) {
          console.error("Erro ao fazer upload da imagem:", error);
          Alert.alert(
            "Aviso",
            "Erro ao fazer upload da imagem. A empresa será criada sem imagem."
          );
        }
      }

      const createBlockData = {
        name: data.name,
        valueForHour: data.valueForHour,
        sports: data.sports,
        imageUrl: imageBlockUrl,
        typeBlockId: data.courtType,
        companyId: companyId,
      };

      const response = await BlockService.createBlock(createBlockData);

      Alert.alert("Sucesso!", "Quadra cadastrada com sucesso!", [
        {
          text: "OK",
          onPress: () => {
            reset();
            setImageUri(null);
            setSubmitted(false);
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      console.error("Erro ao cadastrar quadra:", error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao cadastrar a quadra. Tente novamente."
      );
    } finally {
      setUploading(false);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    control,
    handleSubmit,
    errors,
    submitted,
    onSubmit,
    handleGoBack,
    isSubmitting: uploading,
    isValid,
    handlePickImage,
    imageUri,
    uploading,
    setUploading,
    sportsOptions,
    courtTypeOptions,
    handleSportsChange,
    handleCourtTypeChange,
    watchedSports,
    watchedCourtType,
    loadingCourtTypes,
  };
};
