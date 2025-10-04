import apiClient from "./apiClient";
import { handleError } from "src/utils/function";
import { ICreateBlockOpeningHoursRequest, ICreateBlockOpeningHoursResponse, ICreateBlockRequest, ICreateBlockResponse, IGetTypeBlockResponse } from "./types/blockService.types";

export const BlockService = {
  async getTypeBlock(): Promise<IGetTypeBlockResponse> {
    try {
      const response = await apiClient.get<IGetTypeBlockResponse>(
        "/type-block"
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async createBlock(data: ICreateBlockRequest): Promise<ICreateBlockResponse> {
    try {
      const response = await apiClient.post<ICreateBlockResponse>("/company-block", data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async createBlockOpeningHours(data: ICreateBlockOpeningHoursRequest): Promise<ICreateBlockOpeningHoursResponse> {
    try {
      const response = await apiClient.post<ICreateBlockOpeningHoursResponse>("/company-block/opening-hours", data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  }
  
};
