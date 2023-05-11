import {z} from 'zod';
import uuid from 'react-native-uuid';

export const ProductSchema = z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  modifiedAt: z.date().optional(),
  name: z.string(),
  price: z.number(),
});

export default class Product {
  private id: string;
  private createdAt: Date;
  private modifiedAt?: Date;
  private name: string;
  private price: number;

  constructor(data: z.infer<typeof ProductSchema>) {
    const validatedData = ProductSchema.parse(data);
    this.id = validatedData.id || (uuid.v4() as string);
    this.createdAt = validatedData.createdAt || new Date();
    this.modifiedAt = validatedData.modifiedAt;
    this.name = validatedData.name;
    this.price = validatedData.price;
  }

  public toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt.toISOString(),
      ...(this.modifiedAt && {modifiedAt: this.modifiedAt?.toISOString()}),
      name: this.name,
      price: this.price,
    };
  }
}
