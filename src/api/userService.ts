import apiClient from "./apiClient";
import { AuthError, AuthResponse } from "../types/auth";
import { handleError } from "src/utils/function";
import {
  IGetUserStatusResponse,
  IUpdateUserProfileRequest,
} from "./types/userServices.types";
import {
  IGetUserByIdResponse,
  IResetPasswordConfirmRequest,
  IResetPasswordConfirmResponse,
  IResetPasswordSendTokenResponse,
} from "./types/userService";

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

  async deleteAccount(userId: string): Promise<void> {
    try {
      await apiClient.patch(`/users/deactivate-account?userId=${userId}`);
    } catch (error) {
      throw handleError(error);
    }
  },

  async getUserById(userId: string): Promise<IGetUserByIdResponse> {
    try {
      const response = await apiClient.get<IGetUserByIdResponse>(
        `/users?userId=${userId}`
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async resetPasswordSendToken(
    documentNumber: string
  ): Promise<IResetPasswordSendTokenResponse> {
    try {
      const response = await apiClient.post<IResetPasswordSendTokenResponse>(
        "/reset-password/send-token",
        { documentNumber }
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

   async resetPasswordConfirm(data: IResetPasswordConfirmRequest): Promise<IResetPasswordConfirmResponse> {
    try {
      const response = await apiClient.post<IResetPasswordConfirmResponse>(
        "/reset-password",
        data
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
