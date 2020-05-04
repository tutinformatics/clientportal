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
}
