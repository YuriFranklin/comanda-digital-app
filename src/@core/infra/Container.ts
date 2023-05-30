import {Container} from 'inversify';
import ProductAdapter from './db/firestore/ProductAdapter';
import ProductController from '../presentation/controllers/ProductController';
import CreateProductUseCase from '../domain/usecases/CreateProductUseCase';
import ProductPresenter from '../presentation/presenters/ProductPresenter';
import LoginUseCase from '../domain/usecases/LoginUseCase';
import AuthAdapter from '../infra/auth/firebase/AuthAdapter';
import AuthController from '../presentation/controllers/AuthController';

export const Registry = {
  ProductAdapter: Symbol.for('ProductAdapter'),
  ProductController: Symbol.for('ProductController'),
  CreateProductUseCase: Symbol.for('CreateProductUseCase'),
  ProductPresenter: Symbol.for('ProductPresenter'),
  AuthAdapter: Symbol.for('AuthAdapter'),
  AuthController: Symbol.for('AuthController'),
  LoginUseCase: Symbol.for('LoginUseCase'),
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

container.bind(Registry.AuthAdapter).toDynamicValue(() => new AuthAdapter());

container
  .bind(Registry.LoginUseCase)
  .toDynamicValue(
    context => new LoginUseCase(context.container.get(Registry.AuthAdapter)),
  );

container
  .bind(Registry.AuthController)
  .toDynamicValue(
    context => new AuthController(context.container.get(Registry.LoginUseCase)),
  );
