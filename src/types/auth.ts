export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
  userId: string;
}

import { ICompany } from '../api/types/companyService.types';

export interface User {
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
  Company?: ICompany[];
}

export interface RegisterData {
  name: string;
  email: string;
  document: string;
  phone: string;
  password: string;
}

export interface AuthError {
  message: string;
  code?: string;
  status?: number;
}

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: User | null;
  isLoading: boolean;
  error: AuthError | null;
}
