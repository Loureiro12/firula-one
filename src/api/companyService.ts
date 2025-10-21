import apiClient from "./apiClient";
import { handleError } from "src/utils/function";
import {
  ICompanyAddressRequest,
  ICompanyAddressResponse,
  ICreateCompanyRequest,
  IGetCompanyByIdResponse,
  IGetCompanyResponse,
  IGetCompanysResponse,
  IUpdateCompanyResponse,
  IUpdateCompanyStatusRequest,
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

  async getByUserId(userId: string): Promise<IGetCompanysResponse | null> {
    try {
      const response = await apiClient.get<IGetCompanysResponse>(
        `/company/userId?userId=${userId}`
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async addNewCompanyAddress({
    companyId,
    addressData,
  }: ICompanyAddressRequest): Promise<ICompanyAddressResponse | null> {
    try {
      const response = await apiClient.post<ICompanyAddressResponse>(
        `company-address?companyId=${companyId}`,
        addressData
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async getCompanyById(
    companyId: string
  ): Promise<IGetCompanyByIdResponse | null> {
    try {
      const response = await apiClient.get<IGetCompanyByIdResponse>(
        `/company/companyId?companyId=${companyId}`
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },

  async updateCompany(
    companyId: string,
    data: IUpdateCompanyStatusRequest
  ): Promise<IUpdateCompanyResponse> {
    try {
      const response = await apiClient.patch<IUpdateCompanyResponse>(
        `/company?companyId=${companyId}`,
        {
          ...data,
        }
      );
      return response.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};
