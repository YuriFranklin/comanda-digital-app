import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AuthGateway from '../../../application/contracts/AuthGateway';

export default class AuthAdapter implements AuthGateway {
  private user: FirebaseAuthTypes.User | null = null;
  private observers: (({
    userName,
    signed,
  }: {
    userName: string | undefined;
    signed: boolean;
  }) => void)[] = [];

  public constructor() {
    auth().onAuthStateChanged(user => {
      this.user = user;
      this.observers.forEach(async observer =>
        observer({
          userName: user?.displayName || undefined,
          signed: !!user || false,
        }),
      );
    });
  }

  public subscribeAuthenticatedListener(
    func: ({
      userName,
      signed,
    }: {
      userName: string | undefined;
      signed: boolean;
    }) => void,
  ): void {
    this.observers.push(func);
  }

  public unsubscribeAuthenticatedListener(
    func: ({
      userName,
      signed,
    }: {
      userName: string | undefined;
      signed: boolean;
    }) => void,
  ): void {
    this.observers = this.observers.filter(listener => listener !== func);
  }

  public getAuthData(): {userName: string | undefined; signed: boolean} {
    return {userName: this.user?.displayName || undefined, signed: !!this.user};
  }

  public async authenticate(userName: string, pass: string): Promise<boolean> {
    try {
      await auth().signInWithEmailAndPassword(userName, pass);
      return true;
    } catch (e) {
      return false;
    }
  }

  public isAuthenticated(): boolean {
    return this.user ? true : false;
  }
  public async signOut(): Promise<void> {
    this.user && auth().signOut();
  }
}
