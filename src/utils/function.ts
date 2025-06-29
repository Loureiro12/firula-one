import { AuthError } from "src/types/auth";

export const isValidCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;

  const cpfDigits = cpf.split("").map((el) => +el);
  const rest = (count: number) =>
    ((cpfDigits
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;

  return rest(10) === cpfDigits[9] && rest(11) === cpfDigits[10];
};

export const removeMask = (value: string): string => {
  return value.replace(/\D/g, '')
}

export const handleError = (error: any): AuthError => {
  if (error.response) {
    return {
      message: error.response.data?.message || "Erro desconhecido",
      code: error.response.data?.code,
      status: error.response.status,
    };
  }
  return {
    message: error.message || "Erro de conexão",
  };
}