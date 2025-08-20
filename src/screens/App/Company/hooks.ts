import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useAuthStore } from "src/store/authStore";
import { CompanyService } from "src/api/companyService";
import { Alert } from "react-native";
import { useCallback, useState } from "react";
import { ICompany } from "src/api/types/companyService.types";

export const useCompany = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const { user } = useAuthStore();

  const [companyData, setCompanyData] = useState<ICompany[]>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddNewCompany = () => {
    navigation.navigate("CreateCompany");
  };

  const fetchCompanies = async () => {
    try {
      if (!user) {
        console.error("User not found");
        return;
      }
      const response = await CompanyService.getByUserId(user.id);
      if (response) {
        setCompanyData(response.company);
      }
    } catch (error) {
      Alert.alert(
        "Ocorreu um erro",
        "Não foi possível carregar as empresas. Tente novamente mais tarde."
      );
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCompanies();
    }, [])
  );

  return {
    handleGoBack,
    handleAddNewCompany,
    companyData,
  };
};
