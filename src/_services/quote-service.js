import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class QuoteService extends Service {
  getQuotes() {
    return this.get("entities/Quote?partyId=DemoCustomer");
  }

  getQuoteDetails(id) {
    return this.post("entityquery/Quote", {
      "inputFields" : { "quoteId": id },
      "entityRelations": { "_toMany_QuoteItem": {} }
    })
  }
}
