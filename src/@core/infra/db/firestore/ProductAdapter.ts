import ProductGateway from '../../../application/contracts/ProductGateway';
import Product from '../../../application/entities/Product';
import firestore from '@react-native-firebase/firestore';

export default class ProductAdapter implements ProductGateway {
  async insert(product: Product): Promise<void> {
    const json = product.toJSON();
    await firestore().collection('products').doc(json.id).set(json);
  }
  update(id: string, product: Product): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  find(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
