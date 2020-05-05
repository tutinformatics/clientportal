import { InvoiceService } from '../../_services/invoice-service';

export class Invoices {
  constructor() {
    this.invoiceService = new InvoiceService();
    this.id = null
  }

  async attached() {
    this.invoiceDetails = await this.invoiceService.getInvoiceDetails(this.id);
    console.log(this.invoiceDetails);
    this.invoiceAsText = JSON.stringify(this.invoiceDetails)
  }

  activate(params) {
    this.id = params.id
  }

}
