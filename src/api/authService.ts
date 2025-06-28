import apiClient from "./apiClient";
import { AuthError, AuthResponse, RegisterData } from "../types/auth";

export const AuthService = {
  async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const data = {
        name: userData.name,
        email: userData.email,
        cpf: userData.document,
        passwordHash: userData.password,
        role: "OWNER",
        phoneNumber: userData.phone,
      };

      const response = await apiClient.post<AuthResponse>("/users", data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async login(credentials: {
    email: string;
    password: string;
  }): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>(
        "/auth/login",
        credentials
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async refreshToken(refreshToken: string): Promise<{ token: string }> {
    try {
      const response = await apiClient.post<{ token: string }>(
        "/auth/refresh-token",
        { refreshToken }
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

function handleError(error: any): AuthError {
  if (error.response) {
    return {
      message: error.response.data?.message || "Erro desconhecido",
      code: error.response.data?.code,
      status: error.response.status,
    };
  }
  return {
    message: error.message || "Erro de conexão",
  };
}
