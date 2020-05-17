import { InvoiceService } from '../../_services/invoice-service';

export class Invoices {
  constructor() {
      this.invoiceService = new InvoiceService();
  }

  async attached() {
      this.invoices = await this.invoiceService.getInvoices();
      console.log(this.invoices);
      this.invoices = this.convertDates(this.invoices);
  }

  convertDates(orders) {
    var result = []
    for (let i = 0; i < orders.length; i++) {
      orders[i].invoiceDate = new Date(orders[i].invoiceDate).toLocaleString();
      result.push(orders[i])
    }
    return result;
  }
}
