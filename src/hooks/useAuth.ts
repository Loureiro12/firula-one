import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { AuthState } from '../types/auth';

export const useAuth = (): AuthState & {
  isAuthenticated: boolean;
  initialize: () => Promise<void>;
} => {
  const state = useAuthStore();
  
  // Adicione lógicas adicionais se necessário
  
  return {
    ...state,
    isAuthenticated: !!state.token,
    initialize: async () => {
      // Lógica para inicialização (verificar token válido, etc.)
    },
  };
};