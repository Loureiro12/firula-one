export interface IFaqCategory {
  id: string;
  name: string;
  appType: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IFaqQuestion {
  id: string;
  question: string;
  answer: string;
  appType: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  faqCategoryId: string;
}

export interface IGetFaqCategoriesResponse {
  faqCategory: IFaqCategory[];
}

export interface IGetFaqQuestionsByCategory {
  faq: IFaqQuestion[];
}
