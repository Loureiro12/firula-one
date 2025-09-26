import axios, { AxiosInstance } from "axios";
import { AddressResponse, ViaCepResponse } from "./types/addressService.types";

// Cliente específico para APIs externas de endereço
const addressApiClient: AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AddressService = {
  /**
   * Busca endereço pelo CEP usando a API do ViaCEP
   * @param cep - CEP a ser consultado (com ou sem formatação)
   * @returns Promise<AddressResponse> - Dados do endereço ou objeto vazio em caso de erro
   */
  async getAddressByCep(cep: string): Promise<AddressResponse> {
    try {
      // Remove caracteres não numéricos do CEP
      const formatCep = cep.replace(/[^0-9]/g, "");

      // Valida se o CEP tem 8 dígitos
      if (formatCep.length !== 8) {
        return {} as AddressResponse;
      }

      const response = await addressApiClient.get<ViaCepResponse>(
        `https://viacep.com.br/ws/${formatCep}/json/`
      );

      // Verifica se a API retornou erro
      if (response.data.erro) {
        return {} as AddressResponse;
      }

      // Mapeia os dados da resposta para o formato esperado
      return {
        bairro: response.data.bairro || "",
        localidade: response.data.localidade || "",
        logradouro: response.data.logradouro || "",
        uf: response.data.uf || "",
      };
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      return {} as AddressResponse;
    }
  },

  /**
   * Valida se o CEP tem formato válido
   * @param cep - CEP a ser validado
   * @returns boolean - true se válido, false caso contrário
   */
  validateCep(cep: string): boolean {
    const formatCep = cep.replace(/[^0-9]/g, "");
    return formatCep.length === 8;
  },

  /**
   * Formata o CEP no padrão brasileiro (12345-678)
   * @param cep - CEP a ser formatado
   * @returns string - CEP formatado ou string vazia se inválido
   */
  formatCep(cep: string): string {
    const formatCep = cep.replace(/[^0-9]/g, "");
    
    if (formatCep.length !== 8) {
      return "";
    }

    return `${formatCep.slice(0, 5)}-${formatCep.slice(5)}`;
  },
};