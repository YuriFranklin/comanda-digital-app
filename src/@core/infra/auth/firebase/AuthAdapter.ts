import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AuthGateway from '../../../application/contracts/AuthGateway';

export default class AuthAdapter implements AuthGateway {
  private user: FirebaseAuthTypes.User | null = null;
  private observers: ((val: boolean) => void)[] = [];

  public constructor() {
    auth().onAuthStateChanged(user => {
      this.user = user;
      this.observers.forEach(async observer => observer(!!user));
    });
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

  subscribeAuthenticatedListener(func: (val: boolean) => void): void {
    this.observers.push(func);
  }

  unsubscribeAuthenticatedListener(func: (val: boolean) => void): void {
    this.observers = this.observers.filter(listener => listener !== func);
  }

  public async signOut(): Promise<void> {
    this.user && auth().signOut();
  }
}
