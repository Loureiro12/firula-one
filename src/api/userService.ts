import apiClient from "./apiClient";
import { AuthError, AuthResponse, RegisterData } from "../types/auth";
import { handleError } from "src/utils/function";
import { IGetUserStatusResponse } from "./types/userServices.types";

export const UserService = {
  async getUserStatus(userId: string): Promise<IGetUserStatusResponse> {
    try {
      const response = await apiClient.get<IGetUserStatusResponse>(
        `/users/status?userId=${userId}`
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
