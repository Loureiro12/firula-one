import { useEffect, useState } from "react";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";
import { FaqService } from "src/api/faqService";
import { IFaqQuestion } from "src/api/types/faqService.types";
import { Alert } from "react-native";

type RoutePropType = RouteProp<AppTabStackParamList, "FaqQuestions">;

export const useFaqQuestions = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();
  const route = useRoute<RoutePropType>();

  const { categoryId, categoryName } = route.params || { categoryId: undefined, categoryName: "" };

  const [questions, setQuestions] = useState<IFaqQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!categoryId) return;
      try {
        setLoading(true);
        const response = await FaqService.getFaqQuestionsByCategory(categoryId);
        setQuestions(response.faq || []);
      } catch (error) {
        console.error("Erro ao carregar perguntas:", error);
        Alert.alert("Erro", "Não foi possível carregar as perguntas desta categoria.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [categoryId]);

  const handleGoBack = () => navigation.goBack();

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return {
    questions,
    loading,
    expandedId,
    toggle,
    handleGoBack,
    categoryName,
  };
};

export default useFaqQuestions;
