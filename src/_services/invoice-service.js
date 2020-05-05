import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class InvoiceService extends Service {
  getInvoices() {
    return this.get("entities/Invoice");
  }

  getInvoiceDetails(id) {
    return this.post("entityquery/Invoice",{
      "inputFields" : { "invoiceId": id },
      "entityRelations": { "_toMany_InvoiceItem": {} }
    })
  }
}
