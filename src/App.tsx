import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {container, Registry} from './@core/infra/Container';
import ProductAdapter from './@core/infra/db/firestore/ProductAdapter';
import Product from './@core/application/entities/Product';

function App(): JSX.Element {
  useEffect(() => {
    (async () => {
      const test = container.get<ProductAdapter>(Registry.ProductAdapter);
      const product = new Product({name: 'Test', price: 1});
      console.log(product);
      await test.insert(product);
    })();
  }, []);

  return (
    <View>
      <Text>Batata</Text>
    </View>
  );
}

export default App;
