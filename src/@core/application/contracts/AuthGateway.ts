export default interface AuthGateway {
  authenticate(userName: string, pass: string): Promise<boolean>;
  isAuthenticated(): boolean;
  signOut(): Promise<void>;
  subscribeAuthenticatedListener(
    func: ({
      userName,
      signed,
    }: {
      userName: string | undefined;
      signed: boolean;
    }) => void,
  ): void;
  unsubscribeAuthenticatedListener(
    func: ({
      userName,
      signed,
    }: {
      userName: string | undefined;
      signed: boolean;
    }) => void,
  ): void;
  getAuthData(): {userName: string | undefined; signed: boolean};
}
