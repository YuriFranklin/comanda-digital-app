import Product from '../entities/Product';

export default interface ProductGateway {
  insert(product: Product): Promise<void>;
  update(id: string, product: Product): Promise<Product>;
  find(id: string): Promise<Product>;
}
