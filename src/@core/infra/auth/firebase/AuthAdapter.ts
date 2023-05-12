import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import AuthGateway from '../../../application/contracts/AuthGateway';

export default class AuthAdapter implements AuthGateway {
  private user: FirebaseAuthTypes.User | null = null;

  public constructor() {
    auth().onAuthStateChanged(user => {
      this.user = user;
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

  public async signOut(): Promise<void> {
    this.user && auth().signOut();
  }
}
