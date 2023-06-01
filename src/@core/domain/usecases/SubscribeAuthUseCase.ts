import AuthGateway from '../../application/contracts/AuthGateway';

export default class SubscribeAuthUseCase {
  public constructor(private repository: AuthGateway) {}

  public execute(fn: Input): void {
    this.repository.subscribeAuthenticatedListener(fn);
  }
}

type Input = ({
  userName,
  signed,
}: {
  userName: string | undefined;
  signed: boolean;
}) => void;
