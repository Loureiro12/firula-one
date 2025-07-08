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
