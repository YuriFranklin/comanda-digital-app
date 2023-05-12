import {Container} from 'inversify';
import ProductAdapter from './db/firestore/ProductAdapter';
import ProductController from '../presentation/controllers/ProductController';
import CreateProductUseCase from '../domain/usecases/CreateProductUseCase';
import ProductPresenter from '../presentation/presenters/ProductPresenter';

export const Registry = {
  ProductAdapter: Symbol.for('ProductAdapter'),
  ProductController: Symbol.for('ProductController'),
  CreateProductUseCase: Symbol.for('CreateProductUseCase'),
  ProductPresenter: Symbol.for('ProductPresenter'),
};

export const container = new Container();

container
  .bind(Registry.ProductController)
  .toDynamicValue(() => new ProductAdapter());

container
  .bind(Registry.CreateProductUseCase)
  .toDynamicValue(
    context =>
      new CreateProductUseCase(context.container.get(Registry.ProductAdapter)),
  );

container
  .bind(Registry.ProductPresenter)
  .toDynamicValue(() => new ProductPresenter());

container
  .bind(Registry.ProductController)
  .toDynamicValue(
    context =>
      new ProductController(
        context.container.get(Registry.CreateProductUseCase),
        context.container.get(Registry.ProductPresenter),
      ),
  );
