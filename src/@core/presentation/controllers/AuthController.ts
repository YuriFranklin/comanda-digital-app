import LoginUseCase from '../../domain/usecases/LoginUseCase';

export default class AuthController {
  constructor(private loginUseCase: LoginUseCase) {}

  public async signIn(userName: string, password: string): Promise<boolean> {
    return this.loginUseCase.execute(userName, password);
  }
}
