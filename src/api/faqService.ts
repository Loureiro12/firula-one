import apiClient from "./apiClient";
import { handleError } from "src/utils/function";

import {
  IGetFaqCategoriesResponse,
  IGetFaqQuestionsByCategory,
} from "./types/faqService.types";

export const FaqService = {
  async getFaqCategories(): Promise<IGetFaqCategoriesResponse | null> {
    try {
      const response = await apiClient.get<IGetFaqCategoriesResponse>(
        `/faq-category/app-type?appType=B2B`
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async getFaqQuestionsByCategory(
    categoryId: string
  ): Promise<IGetFaqQuestionsByCategory> {
    try {
      const response = await apiClient.get<IGetFaqQuestionsByCategory>(
        `/faq/category?categoryId=${categoryId}`
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
