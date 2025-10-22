import { ICompany } from "./companyService.types";

export interface IUser {
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

export interface IGetUserByIdResponse {
  data: IUser;
}

export interface IResetPasswordSendTokenResponse {
  success: boolean;
  message: string;
  userId: string;
}

export interface IResetPasswordConfirmRequest {
  userId: string;
  newPassword: string;
  code: string;
}

export interface IResetPasswordConfirmResponse {
  success: boolean;
  message: string;
  user: IUser;
}
