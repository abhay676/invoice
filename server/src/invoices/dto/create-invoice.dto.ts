import { Type } from 'class-transformer';
import { IsNumber, ValidateNested } from 'class-validator';

export class Client {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal_code: number;
}

export class Company extends Client {}

export class Product {
  item: string;
  quantity: number;
  amount: number;
  description: string;
  discount?: number;
  gst?: number;
}

export class CreateInvoiceDto {
  @ValidateNested()
  @Type(() => Client)
  client: Client;

  @ValidateNested()
  @Type(() => Company)
  company: Company;

  @ValidateNested({ each: true })
  @Type(() => Product)
  products: Array<Product>;

  @IsNumber()
  paid: number;
}
