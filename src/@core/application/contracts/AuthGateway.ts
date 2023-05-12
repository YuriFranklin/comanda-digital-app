export default interface AuthGateway {
  authenticate(userName: string, pass: string): Promise<boolean>;
  isAuthenticated(): boolean;
  signOut(): Promise<void>;
}
