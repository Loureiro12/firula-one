import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { BlockService } from "../../../../../api/blockService";
import { IBlock, ITypeBlock } from "../../../../../api/types/blockService.types";
import { useCompanyStore } from "src/store";

export const useListAllBlock = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

      const { companyId } = useCompanyStore();
    

  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [typeBlocks, setTypeBlocks] = useState<ITypeBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const loadTypeBlocks = useCallback(async () => {
    try {
      const response = await BlockService.getTypeBlock();
      setTypeBlocks(response.typeBlock);
    } catch (error) {
      console.error("Error loading type blocks:", error);
    }
  }, []);

  const loadBlocks = useCallback(async () => {
    try {
      setError(null);
      const response = await BlockService.getAllBlocks(companyId ?? '');
      setBlocks(response.block);
    } catch (error) {
      console.error("Error loading blocks:", error);
      setError("Erro ao carregar quadras. Tente novamente.");
      Alert.alert("Erro", "Não foi possível carregar as quadras. Verifique sua conexão e tente novamente.");
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }, [companyId]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([loadBlocks(), loadTypeBlocks()]);
  }, [loadBlocks, loadTypeBlocks]);

  const navigateToCreateCourt = useCallback(() => {
    navigation.navigate('CreateNewCourt');
  }, [navigation]);

  const navigateToEditCourt = useCallback((courtId: string) => {
    // TODO: Implementar quando a tela de edição estiver criada
    console.log("Navigate to edit court:", courtId);
    Alert.alert("Em breve", "Funcionalidade de edição será implementada em breve.");
  }, []);

  const navigateToCourtOpeningHours = useCallback((companyBlockId: string) => {
    navigation.navigate('CourtOpeningHours', { companyBlockId });
  }, [navigation]);

  // Função para obter o nome do tipo de quadra
  const getTypeBlockName = useCallback((typeBlockId: string): string => {
    const typeBlock = typeBlocks.find(tb => tb.id === typeBlockId);
    return typeBlock?.name || 'Tipo não encontrado';
  }, [typeBlocks]);

  // Verificar se a quadra tem horários configurados
  // Por enquanto, vamos assumir que se maxUsersPerDayUse está configurado, tem horários
  // Idealmente, a API deveria retornar uma flag indicando se tem horários configurados
  const hasOpeningHours = useCallback((block: IBlock): boolean => {
    return block.maxUsersPerDayUse !== null && block.maxUsersPerDayUse !== "";
  }, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const retry = useCallback(async () => {
    setError(null);
    await Promise.all([loadBlocks(), loadTypeBlocks()]);
  }, [loadBlocks, loadTypeBlocks]);

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([loadBlocks(), loadTypeBlocks()]);
    };
    loadData();
  }, [loadBlocks, loadTypeBlocks]);

  return {
    // Data
    blocks,
    typeBlocks,
    isLoading,
    refreshing,
    error,
    // Actions
    onRefresh,
    navigateToCreateCourt,
    navigateToEditCourt,
    navigateToCourtOpeningHours,
    handleGoBack,
    retry,
    // Helpers
    getTypeBlockName,
    hasOpeningHours,
  };
};
