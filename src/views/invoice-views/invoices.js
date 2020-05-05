import { InvoiceService } from '../../_services/invoice-service';

export class Invoices {
  constructor() {
      this.invoiceService = new InvoiceService();
  }

  async attached() {
      this.invoices = await this.invoiceService.getInvoices();
      console.log(this.invoices);
  }

}
