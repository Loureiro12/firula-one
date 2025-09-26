export interface TokenManager {
  getToken(): string | null;
  getRefreshToken(): string | null;
  setToken(token: string): void;
  logout(): void;
}