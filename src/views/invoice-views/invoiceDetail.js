import { InvoiceService } from '../../_services/invoice-service';

export class Invoices {
  constructor() {
    this.invoiceService = new InvoiceService();
    this.id = null
  }

  async attached() {
    this.invoiceDetails = await this.invoiceService.getInvoiceDetails(this.id);
    console.log(this.invoiceDetails[0]);
    this.invoiceAsText = JSON.stringify(this.invoiceDetails)
    this.invoiceDetail = this.invoiceDetails[0]
    this.keys = Object.keys(this.invoiceDetail)
    this.rows = this.invoiceDetail._toMany_InvoiceItem
    console.log(this.rows)
  }

  activate(params) {
    this.id = params.id
  }

}

export class KeysValueConverter {
  toView(obj) {
    return Reflect.ownKeys(obj);
  }
}
