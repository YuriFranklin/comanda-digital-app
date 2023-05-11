import Bill, {BillSchema} from './Bill';
import {z} from 'zod';

const GuarantorSchema = z.object({
  id: z.string(),
  name: z.string(),
  credit: z.number().optional(),
  createdAt: z.date(),
  modifiedAt: z.date().optional(),
  bills: z
    .array(BillSchema)
    .transform(bills => bills.map(bill => new Bill(bill))),
});

export default class Guarantor {
  private id: string;
  private name: string;
  private credit?: number;
  private createdAt: Date;
  private modifiedAt?: Date;
  private bills: Bill[];

  public constructor(data: z.infer<typeof GuarantorSchema>) {
    const validatedData = GuarantorSchema.parse(data);
    this.id = validatedData.id;
    this.name = validatedData.name;
    this.credit = validatedData.credit;
    this.createdAt = validatedData.createdAt;
    this.modifiedAt = validatedData.modifiedAt;
    this.bills = validatedData.bills || [];
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      credit: this.credit,
      createdAt: this.createdAt.toISOString(),
      modifiedAt: this.modifiedAt?.toISOString(),
      bills: this.bills.map(bill => bill.toJSON()),
    };
  }
}
