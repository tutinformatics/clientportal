import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class InvoiceService extends Service {
  getInvoices() {
    return this.client
      .fetch("entities/Invoice")
      .then(response => response.json())
      .catch(reason => {
        console.error(reason);
        return [];
      });
  }

  getInvoiceDetails(id) {
      return this.client.fetch(
        "entityquery/Invoice",
        {
          method: "post",
          body: JSON.stringify({
            "inputFields" : {
              "invoiceId": id
            },
            "entityRelations": {
              "_toMany_InvoiceItem": {}
            }
          })
        }
      ).then(response => response.json())
        .catch(reason => {
          console.error(reason);
          return [];
        });

  }
}
