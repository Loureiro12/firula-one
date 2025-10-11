import { useState, useEffect } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { AppTabStackParamList } from "@navigation/types";
import { MultiSelectOption } from "@components/atoms/MultiSelect/types";
import { SingleSelectOption } from "@components/atoms/SingleSelect/types";
import { BlockService } from "src/api/blockService";
import { ITypeBlock, IBlock } from "src/api/types/blockService.types";
import { uploadImage } from "src/utils/function";
import { useBottomDrawer } from "src/hooks";

interface UpdateBlockFormData {
  name: string;
  sports: string[];
  courtType: string;
  isActive: boolean;
}

type UpdateBlockScreenRouteProp = RouteProp<AppTabStackParamList, 'UpdateBlock'>;

export const useUpdateBlock = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const route = useRoute<UpdateBlockScreenRouteProp>();
  const { showBottomDrawer } = useBottomDrawer();

  const blockId = route.params?.blockId;

  const [imageUri, setImageUri] = useState<string | null>(null);
  const [initialImageUrl, setInitialImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageChanged, setImageChanged] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [courtTypes, setCourtTypes] = useState<ITypeBlock[]>([]);
  const [loadingCourtTypes, setLoadingCourtTypes] = useState(true);
  const [loadingBlock, setLoadingBlock] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [initialData, setInitialData] = useState<UpdateBlockFormData | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    reset,
  } = useForm<UpdateBlockFormData>({
    defaultValues: {
      name: "",
      sports: [],
      courtType: "",
      isActive: true,
    },
    mode: "onChange",
  });

  const watchedData = watch();
  const watchedSports = watch("sports");
  const watchedCourtType = watch("courtType");
  const watchedIsActive = watch("isActive");

  // Verificar se houve mudanças nos dados
  useEffect(() => {
    if (initialData) {
      const hasChanged = 
        watchedData.name !== initialData.name ||
        JSON.stringify(watchedData.sports) !== JSON.stringify(initialData.sports) ||
        watchedData.courtType !== initialData.courtType ||
        watchedData.isActive !== initialData.isActive ||
        imageChanged; // Se mudou a imagem

      setHasChanges(hasChanged);
    }
  }, [watchedData, imageUri, initialData, imageChanged]);

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

  // Carregar dados da quadra
  useEffect(() => {
    const loadBlockData = async () => {
      if (!blockId) {
        Alert.alert("Erro", "ID da quadra não fornecido");
        navigation.goBack();
        return;
      }

      try {
        setLoadingBlock(true);
        const response = await BlockService.getBlockById(blockId);
        const block = response.block;

        const formData: UpdateBlockFormData = {
          name: block.name,
          sports: block.sports,
          courtType: block.typeBlockId,
          isActive: block.isActive,
        };

        // Definir dados iniciais para comparação
        setInitialData(formData);

        // Preencher formulário
        setValue("name", block.name);
        setValue("sports", block.sports);
        setValue("courtType", block.typeBlockId);
        setValue("isActive", block.isActive);

        // Se tem imagem, definir como inicial
        if (block.imageUrl) {
        // Definir preview da imagem existente (não marca como alteração)
        const r2Base = "https://pub-ed847887b3d7415384bbf5488c674561.r2.dev/";
        setInitialImageUrl(block.imageUrl);
        setImageUri(`${r2Base}${block.imageUrl}`);
        }
      } catch (error) {
        console.error("Erro ao carregar dados da quadra:", error);
        Alert.alert(
          "Erro",
          "Não foi possível carregar os dados da quadra. Tente novamente."
        );
        navigation.goBack();
      } finally {
        setLoadingBlock(false);
      }
    };

    loadBlockData();
  }, [blockId]);

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
        setImageChanged(true);
      }
    } catch (error) {
      console.error("Erro ao selecionar imagem da galeria:", error);
      Alert.alert("Erro", "Erro ao selecionar imagem da galeria");
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
        setImageChanged(true);
      }
    } catch (error) {
      console.error("Erro ao tirar foto:", error);
      Alert.alert("Erro", "Erro ao tirar foto");
    }
  };

  const handleSportsChange = (selectedSports: string[]) => {
    setValue("sports", selectedSports, { shouldValidate: true });
  };

  const handleCourtTypeChange = (selectedCourtType: string) => {
    setValue("courtType", selectedCourtType, { shouldValidate: true });
  };

  const handleActiveChange = (isActive: boolean) => {
    setValue("isActive", isActive, { shouldValidate: true });
  };

  const onSubmit = async (data: UpdateBlockFormData) => {
    if (!blockId) return;

    try {
      setSubmitted(true);
      setIsSubmitting(true);

      let finalImageUrl = "";

      // Se a imagem foi alterada, fazer upload da nova imagem
      if (imageChanged) {
        // se imageUri for uma URL remota (inicial), isso significa que o usuário não selecionou uma nova imagem
        // porém imageChanged só é definido true quando o usuário escolhe via picker/camera, então aqui assumimos upload
        if (imageUri) {
          setUploading(true);
          try {
            finalImageUrl = await uploadImage("quadra", imageUri, Date.now().toString());
          } catch (uploadError) {
            console.error("Erro no upload da imagem:", uploadError);
            Alert.alert(
              "Erro",
              "Erro ao fazer upload da imagem. Tente novamente."
            );
            return;
          } finally {
            setUploading(false);
          }
        }
      } else {
        // se não mudou, manter a imagem inicial (pode ser null)
        finalImageUrl = initialImageUrl || "";
      }

      const updateData = {
        name: data.name,
        sports: data.sports,
        imageUrl: finalImageUrl,
        typeBlockId: data.courtType,
        isActive: data.isActive,
      };

      await BlockService.updateBlock(blockId, updateData);

      showBottomDrawer({
        title: "Sucesso!",
        description: "Quadra atualizada com sucesso!",
        actions: [{
          label: "OK",
          onPress: () => {
            navigation.goBack();
          },
        }],
      });
    } catch (error) {
      console.error("Erro ao atualizar quadra:", error);
      showBottomDrawer({
        title: "Erro",
        description: "Ocorreu um erro ao atualizar a quadra. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    if (hasChanges) {
      Alert.alert(
        "Descartar alterações?",
        "Você tem alterações não salvas. Tem certeza que deseja sair?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Descartar",
            style: "destructive",
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } else {
      navigation.goBack();
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    submitted,
    onSubmit,
    handleGoBack,
    isSubmitting: isSubmitting || uploading,
    isValid: isValid && hasChanges, // Só habilita se válido E tem mudanças
    handlePickImage,
    imageUri,
    uploading,
    sportsOptions,
    courtTypeOptions,
    handleSportsChange,
    handleCourtTypeChange,
    handleActiveChange,
    watchedSports,
    watchedCourtType,
    watchedIsActive,
    loadingCourtTypes,
    loadingBlock,
    hasChanges,
  };
};
