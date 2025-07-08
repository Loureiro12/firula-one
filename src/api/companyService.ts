import apiClient from "./apiClient";
import { handleError } from "src/utils/function";
import {
  ICreateCompanyRequest,
  IGetCompanyResponse,
} from "./types/companyService.types";

export const CompanyService = {
  async create(
    userId: string,
    data: ICreateCompanyRequest
  ): Promise<IGetCompanyResponse> {
    try {
      console.log("Creating company with data:", userId);
      const response = await apiClient.post<IGetCompanyResponse>(
        `/company?userId=${userId}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error creating company:", error);
      throw handleError(error);
    }
  },
};
