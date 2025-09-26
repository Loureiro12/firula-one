import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { UserService } from "src/api/userService";
import { useAuthStore } from "src/store/authStore";
import { useCompanyStore } from "src/store/companyStore";

export const useHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user, setUser } = useAuthStore();
  const { setCompanyId, clearCompany } = useCompanyStore();

  const [isLoading, setIsLoading] = useState(true);
  const [hasProfileIssues, setHasProfileIssues] = useState(false);

  const handleNavigateToValidateReservations = () => {
    navigation.navigate("ValidateReservations");
  };

  const handleNavigateToPendingProfile = () => {
    navigation.navigate("PendingProfileScreen");
  };

  const loadUserData = async () => {
    try {
      if (!user?.id) return;

      const { data: userData } = await UserService.getUserById(user.id);

      // Atualizar o store do usuário (sempre mantendo o ID original por segurança)
      const updatedUser = {
        id: user.id, // Sempre mantém o ID original
        name: userData.name,
        email: userData.email,
        cpf: userData.cpf,
        role: userData.role,
        preferredName: userData.preferredName,
        isBlock: userData.isBlock,
        imageUrl: userData.imageUrl,
        clientId: userData.clientId,
        mobilePhone: userData.mobilePhone,
        status: userData.status,
        emergencyContactName: userData.emergencyContactName,
        emergencyContactPhone: userData.emergencyContactPhone,
        createdAt: userData.createdAt,
        updatedAt: userData.updatedAt,
      };

      setUser(updatedUser);

      // Atualizar o store da empresa
      if (userData.Company && userData.Company.length > 0) {
        // Se o usuário tem empresas, seleciona a primeira por padrão
        // ou mantém a empresa atual se ela ainda existir na lista
        const currentCompanyId = useCompanyStore.getState().companyId;
        const currentCompanyExists = userData.Company.find(
          company => company.id === currentCompanyId
        );

        if (currentCompanyExists) {
          // Mantém a empresa atual se ela ainda existe
          setCompanyId(currentCompanyId!);
        } else {
          // Seleciona a primeira empresa se a atual não existe mais
          setCompanyId(userData.Company[0].id);
        }
      } else {
        // Se não tem empresas, limpa o store
        clearCompany();
      }

    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    }
  };

  const loadAccountStatus = async () => {
    try {
      setIsLoading(true);

      // Primeiro busca os dados atualizados do usuário
      await loadUserData();

      // Depois verifica o status da conta
      if (user?.id) {
        const responseLoadAccountStatus = await UserService.getUserStatus(
          user.id
        );

        if (responseLoadAccountStatus.pendingData.length > 0) {
          setHasProfileIssues(true);
        }
      }
      
      setIsLoading(false);

    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadAccountStatus();
    }, [])
  );

  return {
    isLoading,
    handleNavigateToValidateReservations,
    handleNavigateToPendingProfile,
    loadAccountStatus,
    hasProfileIssues,
  };
};
