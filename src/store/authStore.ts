import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { AuthService } from '../api/authService';
import { configureTokenManager } from '../api/apiClient';
import { storage } from '../utils/storage';
import { AuthState, AuthResponse, RegisterData, LoginData, AuthError, User } from '../types/auth';
import { UserService } from 'src/api/userService';
import { IUpdateUserProfileRequest } from 'src/api/types/userServices.types';

type ExtendedAuthState = AuthState & {
  isAuthenticated: boolean;
};

type AuthActions = {
  register: (userData: RegisterData) => Promise<void>;
  updateUser: (userData: IUpdateUserProfileRequest) => Promise<void>;
  setUser: (user: User) => void;
  login: (credentials: LoginData) => Promise<void>;
  logout: () => void;
  refreshSession: () => Promise<void>;
  clearError: () => void;
  hydrate: () => Promise<void>;
  initialize: () => Promise<void>;
  setToken: (token: string) => void;
};

type AuthStore = ExtendedAuthState & AuthActions;

const initialState: ExtendedAuthState = {
  token: null,
  refreshToken: null,
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

const store: StateCreator<AuthStore> = (set, get) => ({
  ...initialState,

  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await AuthService.register(userData);
      set({ 
        token: data.token,
        refreshToken: data.refreshToken,
        user: data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      const err = error as AuthError;
      set({ 
        error: { 
          message: err.message, 
          code: err.code, 
          status: err.status 
        },
        isLoading: false,
      });
      throw error;
    }
  },

  updateUser: async (userData) => {
    const { user } = get();
    if (!user) throw new Error('Usuário não autenticado');

    set({ isLoading: true, error: null });
    try {
      await UserService.updateUserProfile(user.id, userData);
      set({ 
        user: { ...user, ...userData },
        isLoading: false,
      });
    } catch (error) {
      const err = error as AuthError;
      set({ 
        error: { 
          message: err.message, 
          code: err.code, 
          status: err.status 
        },
        isLoading: false,
      });
      throw error;
    }
  },

  setUser: (user: User) => {
    set({ user });
  },

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const data = await AuthService.login(credentials);
      set({ 
        token: data.token,
        refreshToken: data.refreshToken,
        user: data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      const err = error as AuthError;
      set({ 
        error: { 
          message: err.message, 
          code: err.code, 
          status: err.status 
        },
        isLoading: false,
      });
      throw error;
    }
  },

  logout: () => {
    set({ ...initialState });
  },

  refreshSession: async () => {
    const { refreshToken } = get();
    if (!refreshToken) return;

    set({ isLoading: true });
    try {
      const data = await AuthService.refreshToken(refreshToken);
      set({ 
        token: data.token,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch (error) {
      set({ 
        ...initialState,
        error: { 
          message: 'Sessão expirada. Por favor, faça login novamente.' 
        },
      });
    }
  },

  clearError: () => set({ error: null }),

  hydrate: async () => {
    const { token, refreshToken, user } = get();
    if (token && refreshToken && user) {
      set({ isAuthenticated: true });
    }
  },

  initialize: async () => {
    const { token, refreshToken, user, hydrate } = get();
    
    if (get().isLoading) return;

    set({ isLoading: true });
    
    try {
      if (token) {
        hydrate(); 
      }
    } catch (error) {
      console.error('Falha na inicialização:', error);
      get().logout();
    } finally {
      set({ isLoading: false });
    }
  },

   setToken: (token: string) => {
    set({ 
      token,
      isAuthenticated: !!token
    });
  },
});

const zustandStorage: PersistOptions<AuthStore>['storage'] = {
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

const persistOptions: PersistOptions<AuthStore> = {
  name: 'auth-storage',
  storage: zustandStorage,
  partialize: (state) => ({
    token: state.token,
    refreshToken: state.refreshToken,
    user: state.user,
    isLoading: false,
    isAuthenticated: !!state.token && !!state.refreshToken && !!state.user,
    error: null,
    register: state.register,
    login: state.login,
    logout: state.logout,
    refreshSession: state.refreshSession,
    clearError: state.clearError,
    hydrate: state.hydrate,
    initialize: state.initialize,
    setToken: state.setToken,
    updateUser: state.updateUser,
    setUser: state.setUser,
  }),
  version: 1,
};

export const useAuthStore = create<AuthStore>()(
  persist(store, persistOptions)
);

// Configure apiClient with token management functions
configureTokenManager({
  getToken: () => useAuthStore.getState().token,
  getRefreshToken: () => useAuthStore.getState().refreshToken,
  setToken: (token: string) => useAuthStore.getState().setToken(token),
  logout: () => useAuthStore.getState().logout(),
});

export type AuthStoreSelectors = {
  useToken: () => string | null;
  useUser: () => User | null;
  useIsAuthenticated: () => boolean;
  useIsLoading: () => boolean;
  useError: () => AuthError | null;
};

// Criando seletores otimizados
export const authStoreSelectors: AuthStoreSelectors = {
  useToken: () => useAuthStore((state) => state.token),
  useUser: () => useAuthStore((state) => state.user),
  useIsAuthenticated: () => useAuthStore((state) => state.isAuthenticated),
  useIsLoading: () => useAuthStore((state) => state.isLoading),
  useError: () => useAuthStore((state) => state.error),
};