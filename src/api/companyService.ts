import apiClient from "./apiClient";
import { handleError } from "src/utils/function";
import {
  ICreateCompanyRequest,
  IGetCompanyResponse,
  IGetCompanysResponse,
} from "./types/companyService.types";

export const CompanyService = {
  async create(
    userId: string,
    data: ICreateCompanyRequest
  ): Promise<IGetCompanyResponse> {
    try {
      const response = await apiClient.post<IGetCompanyResponse>(
        `/company?userId=${userId}`,
        data
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async getByUserId(
    userId: string
  ): Promise<IGetCompanysResponse | null> {
    try {
      const response = await apiClient.get<IGetCompanysResponse>(
        `/company/userId?userId=${userId}`
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  }
};
