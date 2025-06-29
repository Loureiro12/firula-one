import apiClient from "./apiClient";
import { AuthError, AuthResponse, RegisterData } from "../types/auth";
import { handleError } from "src/utils/function";
import {
  IGetUserStatusResponse,
  IUpdateUserProfileRequest,
} from "./types/userServices.types";

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

  async updateUserProfile(
    userId: string,
    data: IUpdateUserProfileRequest
  ): Promise<AuthResponse> {
    try {
      const dataUpdate = {
        name: data.name,
        phoneNumber: data.phone,
      };

      const response = await apiClient.patch<AuthResponse>(
        `/users?userId=${userId}`,
        dataUpdate
      );
      return response.data;
    } catch (error) {
      throw handleError(error) as AuthError;
    }
  },
};
