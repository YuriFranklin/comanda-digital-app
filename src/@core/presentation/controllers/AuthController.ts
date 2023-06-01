import LoginUseCase from '../../domain/usecases/LoginUseCase';
import SubscribeAuthUseCase from '../../domain/usecases/SubscribeAuthUseCase';
import UnsubscribeAuthUseCase from '../../domain/usecases/UnsubscribeAuthUseCase';

export default class AuthController {
  constructor(
    private loginUseCase: LoginUseCase,
    private subscribeAuthUseCase: SubscribeAuthUseCase,
    private unsubscribeAuthUseCase: UnsubscribeAuthUseCase,
  ) {}

  public async signIn(userName: string, password: string): Promise<boolean> {
    return this.loginUseCase.execute(userName, password);
  }

  public subscribe(
    func: ({
      userName,
      signed,
    }: {
      userName: string | undefined;
      signed: boolean;
    }) => void,
  ): void {
    return this.subscribeAuthUseCase.execute(func);
  }

  public unsubscribe(
    func: ({
      userName,
      signed,
    }: {
      userName: string | undefined;
      signed: boolean;
    }) => void,
  ): void {
    return this.unsubscribeAuthUseCase.execute(func);
  }
}
