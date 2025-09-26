import { ICompany } from "./companyService.types"

export interface IGetUserByIdResponse {
  data: {
    id: string;
  name: string;
  email: string;
  cpf: string;
  role: string;
  preferredName: string | null;
  isBlock: boolean;
  imageUrl: string | null;
  clientId: string;
  mobilePhone: string;
  status: string;
  emergencyContactName: string | null;
  emergencyContactPhone: string | null;
  createdAt: string;
  updatedAt: string;
  Company: ICompany[];
  }
}

