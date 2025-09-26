import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import { AuthState } from "../types/auth";
import { TokenManager } from "./types/tokenManager";

declare module "axios" {
  interface AxiosRequestConfig {
    _retry?: boolean;
  }
}

let tokenManager: TokenManager | null = null;

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://192.168.100.230:3333",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to configure token management
export const configureTokenManager = (manager: TokenManager) => {
  tokenManager = manager;
};

// Interceptor para adicionar token
apiClient.interceptors.request.use(
  (config) => {
    const token = tokenManager?.getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

// Interceptor para refresh token
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      tokenManager
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = tokenManager.getRefreshToken();
        if (!refreshToken) throw new Error("No refresh token available");

        const response = await axios.post<Pick<AuthState, "token">>(
          "/auth/refresh",
          { refreshToken }
        );

        const newToken = response.data.token;
        if (!newToken) throw new Error("No token returned from refresh");
        tokenManager.setToken(newToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }

        return apiClient(originalRequest);
      } catch (refreshError) {
        tokenManager.logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
