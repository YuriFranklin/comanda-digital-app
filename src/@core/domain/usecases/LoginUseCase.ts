import AuthGateway from '../../application/contracts/AuthGateway';

export default class LoginUseCase {
  public constructor(private repository: AuthGateway) {}

  public async execute(userName: string, password: string): Promise<boolean> {
    const authenticated = await this.repository.authenticate(
      userName,
      password,
    );
    return authenticated;
  }
}
