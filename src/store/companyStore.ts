import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { storage } from '../utils/storage';

interface CompanyState {
  companyId: string | null;
  isLoading: boolean;
  error: string | null;
}

interface CompanyActions {
  setCompanyId: (companyId: string) => void;
  clearCompany: () => void;
  clearError: () => void;
  hydrate: () => Promise<void>;
}

type CompanyStore = CompanyState & CompanyActions;

const initialState: CompanyState = {
  companyId: null,
  isLoading: false,
  error: null,
};

const store: StateCreator<CompanyStore> = (set, get) => ({
  ...initialState,

  setCompanyId: (companyId: string) => {
    set({ 
      companyId,
      error: null 
    });
  },

  clearCompany: () => {
    set({ 
      companyId: null,
      error: null 
    });
  },

  clearError: () => {
    set({ error: null });
  },

  hydrate: async () => {
    try {
      const { companyId } = get();
      if (companyId) {
        // Company já está disponível no estado
        console.log('Company hydrated:', companyId);
      }
    } catch (error) {
      console.error('Error hydrating company store:', error);
    }
  },
});

const zustandStorage: PersistOptions<CompanyStore>['storage'] = {
  getItem: async (name) => {
    const value = await storage.getItem(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (name, value) => {
    await storage.setItem(name, JSON.stringify(value));
  },
  removeItem: async (name) => {
    await storage.removeItem(name);
  },
};

const persistOptions: PersistOptions<CompanyStore> = {
  name: 'company-storage',
  storage: zustandStorage,
  partialize: (state) => ({
    companyId: state.companyId,
    isLoading: false,
    error: null,
    setCompanyId: state.setCompanyId,
    clearCompany: state.clearCompany,
    clearError: state.clearError,
    hydrate: state.hydrate,
  }),
  version: 1,
};

export const useCompanyStore = create<CompanyStore>()(
  persist(store, persistOptions)
);

// Seletores otimizados
export const companyStoreSelectors = {
  useCompanyId: () => useCompanyStore((state) => state.companyId),
  useIsLoading: () => useCompanyStore((state) => state.isLoading),
  useError: () => useCompanyStore((state) => state.error),
};