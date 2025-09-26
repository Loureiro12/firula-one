import { useState } from "react";
import { AddressService } from "../api/addressService";
import { AddressResponse } from "../api/types/addressService.types";

interface UseAddressReturn {
  address: AddressResponse | null;
  isLoading: boolean;
  error: string | null;
  searchAddressByCep: (cep: string) => Promise<void>;
  clearAddress: () => void;
  validateCep: (cep: string) => boolean;
  formatCep: (cep: string) => string;
}

/**
 * Hook para gerenciar busca de endereços por CEP
 */
export const useAddress = (): UseAddressReturn => {
  const [address, setAddress] = useState<AddressResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchAddressByCep = async (cep: string): Promise<void> => {
    if (!AddressService.validateCep(cep)) {
      setError("CEP inválido. Digite um CEP com 8 dígitos.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const addressData = await AddressService.getAddressByCep(cep);
      
      // Verifica se retornou dados válidos
      if (!addressData.logradouro && !addressData.localidade) {
        setError("CEP não encontrado. Verifique o número digitado.");
        setAddress(null);
      } else {
        setAddress(addressData);
      }
    } catch (err) {
      setError("Erro ao buscar CEP. Tente novamente.");
      setAddress(null);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAddress = () => {
    setAddress(null);
    setError(null);
  };

  const validateCep = (cep: string): boolean => {
    return AddressService.validateCep(cep);
  };

  const formatCep = (cep: string): string => {
    return AddressService.formatCep(cep);
  };

  return {
    address,
    isLoading,
    error,
    searchAddressByCep,
    clearAddress,
    validateCep,
    formatCep,
  };
};