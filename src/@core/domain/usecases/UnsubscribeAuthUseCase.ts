import AuthGateway from '../../application/contracts/AuthGateway';

export default class UnsubscribeAuthUseCase {
  public constructor(private repository: AuthGateway) {}

  public execute(fn: Input): void {
    this.repository.unsubscribeAuthenticatedListener(fn);
  }
}

type Input = ({
  userName,
  signed,
}: {
  userName: string | undefined;
  signed: boolean;
}) => void;
