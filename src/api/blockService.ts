import apiClient from "./apiClient";
import { handleError } from "src/utils/function";
import { ICreateBlockRequest, ICreateBlockResponse, IGetTypeBlockResponse } from "./types/blockService.types";

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
  }
};
