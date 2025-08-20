export interface ICompany {
  id: string;
  name: string;
  slug: string;
  cpf_cnpj: string;
  typeDocument: string;
  mobilePhone: string;
  imageUrl: string | null;
  isActive: boolean;
  paymentId: string | null;
  description: string | null;
  apiKey: string | null;
  onboardingStatus: string;
  accountPaymentId: string | null;
  paymentGateway: string | null;
  status: string;
  fantasyName: string;
  corporateReason: string;
  regime: string;
  openingDate: string;
  latitude: string;
  longitude: string;
  isBlock: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface ICreateCompanyRequest {
  name: string;
  cpfCnpj: string;
  mobilePhone: string;
  fantasy_name: string;
  corporate_reason: string;
  regime: string;
  opening_date: string;
  imageUrl?: string;
  description?: string;
  typeDocument: string;
}

export interface IGetCompanyResponse {
  companyId: string;
  message?: string;
}

export interface IGetCompanysResponse {
  company: ICompany[];
}
