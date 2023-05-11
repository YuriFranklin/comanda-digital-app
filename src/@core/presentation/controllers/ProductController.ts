import CreateProductUseCase from '../../domain/usecases/CreateProductUseCase';
import ProductPresenter from '../presenters/ProductPresenter';

export default class ProductController {
  constructor(
    private productPresenter: ProductPresenter,
    private createProductUseCase: CreateProductUseCase,
  ) {}

  public async createProduct(product: {name: string; price: number}) {
    const createdProduct = await this.createProductUseCase.execute(product);

    return this.productPresenter.present(createdProduct);
  }
}
