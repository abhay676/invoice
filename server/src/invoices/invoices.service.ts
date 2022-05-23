import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto, Product } from './dto/create-invoice.dto';
import { createInvoice } from './invoice';

@Injectable()
export class InvoicesService {
  async create(payload: CreateInvoiceDto) {
    const invoice = {
      shipping: payload.client,
      items: payload.products,
      subtotal: this.getSubTotal,
      paid: payload.paid,
      invoice_nr: 1234, // FIXME : get the id & replace it
    };
    createInvoice(invoice, 'invoice.pdf');
  }
  getSubTotal(products: Array<Product>): number {
    let subTotal = 0;
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      subTotal += element.amount;
    }
    return subTotal;
  }
}
