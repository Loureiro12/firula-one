import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { useEffect, useState } from "react";
import { FaqService } from "src/api/faqService";
import { IFaqCategory } from "src/api/types/faqService.types";

export const useMainHelpCenter = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  
  const [categories, setCategories] = useState<IFaqCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const response = await FaqService.getFaqCategories();
        console.log('#########response', response?.faqCategory)
        setCategories(response?.faqCategory || []);
      } catch (error) {
        console.error("Erro ao carregar categorias de FAQ:", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSelectCategory = (category: IFaqCategory) => {
    navigation.navigate("FaqQuestions", { categoryId: category.id, categoryName: category.name });
  };

  return {
    handleGoBack,
    categories,
    loading,
    handleSelectCategory,
  };
};
