import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {IntlMessageFormat} from 'intl-messageformat';

export default class ProductPresenter {
  private currency = new IntlMessageFormat('pt-BR', '{number, number, BRL}');

  present(product: Input): Product {
    return {
      id: product.id,
      createdAt: format(new Date(product.createdAt), 'dd/MM/yyyy HH:mm:ss', {
        locale: ptBR,
      }),
      name: product.name,
      price: this.currency.format({number: product.price}) as string,
      ...(product.modifiedAt && {
        modifiedAt: format(
          new Date(product.modifiedAt),
          'dd/MM/yyyy HH:mm:ss',
          {locale: ptBR},
        ),
      }),
    };
  }
}

type Input = {
  id: string;
  createdAt: string;
  modifiedAt?: string;
  name: string;
  price: number;
};

type Product = {
  id: string;
  createdAt: string;
  modifiedAt?: string;
  name: string;
  price: string;
};
