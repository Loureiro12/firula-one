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
  companyAddress: IAddressData[];
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

export interface IAddressData {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface ICompanyAddressRequest {
  companyId: string;
  addressData: IAddressData;
}

export interface ICompanyAddressResponse {
  addressId: string;
}

export interface IGetCompanyByIdResponse {
  company: ICompany;
}

export interface IUpdateCompanyStatusRequest {
  isActive?: boolean;
  mobilePhone?: string;
  imageUrl?: string;
  description?: string;
}

export interface IUpdateCompanyResponse {
  companyId: string;
}