import ProductGateway from '../../application/contracts/ProductGateway';
import Product from '../../application/entities/Product';

export default class CreateProductUseCase {
  public constructor(private repository: ProductGateway) {}

  public async execute(input: Input): Promise<Output> {
    const product = new Product(input);
    await this.repository.insert(product);

    return product.toJSON();
  }
}

export type Input = {
  name: string;
  price: number;
};

export type Output = {
  id: string;
  createdAt: string;
  name: string;
  price: number;
};
