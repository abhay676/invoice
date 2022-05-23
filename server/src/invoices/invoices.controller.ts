import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post('/create')
  create(@Body() payload: CreateInvoiceDto) {
    return this.invoicesService.create(payload);
  }
}
