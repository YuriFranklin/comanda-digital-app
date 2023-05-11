import {Container} from 'inversify';
import ProductAdapter from './db/firestore/ProductAdapter';

export const Registry = {
  ProductAdapter: Symbol.for('ProductAdapter'),
};

export const container = new Container();

container
  .bind(Registry.ProductAdapter)
  .toDynamicValue(() => new ProductAdapter());
