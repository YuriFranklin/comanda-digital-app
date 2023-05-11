import {z} from 'zod';
import Product, {ProductSchema} from './Product';

export const BillSchema = z.object({
  id: z.string(),
  status: z.enum(['BILL_OPEN', 'BILL_CLOSED']),
  name: z.string(),
  createdAt: z.date().optional(),
  modifiedAt: z.date().optional(),
  owner: z.string().optional(),
  discount: z.number().optional(),
  paidValue: z.number().optional(),
  products: z
    .array(ProductSchema)
    .optional()
    .transform(products => products?.map(product => new Product(product))),
});

export default class Bill {
  private id: string;
  private status: 'BILL_OPEN' | 'BILL_CLOSED' | 'BILL_CANCELED';
  private createdAt: Date;
  private name: string;
  private modifiedAt?: Date;
  private owner?: string;
  private discount?: number;
  private paidValue?: number;
  private products: Product[];

  constructor(data: z.infer<typeof BillSchema>) {
    const validatedData = BillSchema.parse(data);
    this.id = validatedData.id;
    this.status = data.status;
    this.name = validatedData.name;
    this.modifiedAt = validatedData.modifiedAt;
    this.owner = validatedData.owner;
    this.discount = validatedData.discount;
    this.paidValue = validatedData.paidValue;
    this.products = validatedData.products || [];
    this.createdAt = validatedData.createdAt || new Date();
  }

  public toJSON() {
    return {
      id: this.id,
      status: this.status,
      name: this.name,
      createdAt: this.createdAt,
      ...(this.modifiedAt && {modifiedAt: this.modifiedAt?.toISOString()}),
      ...(this.owner && {owner: this.owner}),
      ...(this.discount && {discount: this.discount}),
      ...(this.paidValue && {paidValue: this.paidValue}),
      products: this.products.map(product => product.toJSON()),
    };
  }
}
