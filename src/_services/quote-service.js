import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class QuoteService extends Service {
  getQuotes() {
    return this.client
      .fetch("entities/QuoteItem")
      .then(response => response.json())
      .catch(reason => {
          console.error(reason);
          return [];
    });
  }

  getQuoteDetails(id) {
    return this.client.fetch(
      "entityquery/Quote",
      {
        method: "post",
        body: JSON.stringify({
          "inputFields" : {
            "quoteId": id
          },
          "entityRelations": {
            "_toMany_QuoteItem": {}
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
