import { InvoiceService } from '../../_services/invoice-service';

export class Invoices {
  constructor() {
    this.invoiceService = new InvoiceService();
    this.id = null
  }

  async attached() {
    this.invoiceDetails = await this.invoiceService.getInvoiceDetails(this.id);
    console.log(this.invoiceDetails[0]);

    this.rows = this.invoiceDetails[0]._toMany_InvoiceItem
    this.invoiceDetail = this.removeEmptyRows(this.invoiceDetails[0])
    this.keys = Object.keys(this.invoiceDetail)

    console.log(this.rows)
  }

  activate(params) {
    this.id = params.id
  }

  removeEmptyRows(obj) {
    var result = {}
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      var val = obj[keys[i]];
      if (val) {
        if (keys[i].toString().includes("Stamp") || keys[i].toString().includes("Date")) {
          result[keys[i]] = new Date(val).toLocaleString();
        } else if (!keys[i].toString().includes("toMany")) {
          result[keys[i]] = val
        }
      }
    }
    return result;
  }

}

export class KeysValueConverter {
  toView(obj) {
    return Reflect.ownKeys(obj);
  }
}
