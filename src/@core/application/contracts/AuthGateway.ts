export default interface AuthGateway {
  authenticate(userName: string, pass: string): Promise<boolean>;
  isAuthenticated(): boolean;
  signOut(): Promise<void>;
  subscribeAuthenticatedListener(func: (val: boolean) => void): void;
  unsubscribeAuthenticatedListener(func: (val: boolean) => void): void;
}
