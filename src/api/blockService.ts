import apiClient from "./apiClient";
import { handleError } from "src/utils/function";
import { ICreateBlockOpeningHoursRequest, ICreateBlockOpeningHoursResponse, ICreateBlockRequest, ICreateBlockResponse, IGetAllBlocksResponse, IGetBlockBySlugResponse, IGetTypeBlockResponse, IUpdateBlockRequest, IUpdateBlockResponse } from "./types/blockService.types";

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

  async updateBlock(blockId: string, data: IUpdateBlockRequest): Promise<IUpdateBlockResponse> {
    try {
      const response = await apiClient.patch<IUpdateBlockResponse>(`/company-block?blockId=${blockId}`, data);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

   async getBlockBySlug(blockId: string): Promise<IGetBlockBySlugResponse> {
    try {
      const response = await apiClient.get<IGetBlockBySlugResponse>(`/company-block/${blockId}`);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

   async getBlockById(blockId: string): Promise<IGetBlockBySlugResponse> {
    try {
      const response = await apiClient.get<IGetBlockBySlugResponse>(`/company-block?blockId=${blockId}`);
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async getAllBlocks(companyId: string): Promise<IGetAllBlocksResponse> {
    try {
      const response = await apiClient.get<IGetAllBlocksResponse>(`company-block/companyId?companyId=${companyId}`);
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
  },


  
};
