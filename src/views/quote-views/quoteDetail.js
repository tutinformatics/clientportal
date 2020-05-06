import { QuoteService } from '../../_services/quote-service';

export class Quotes {
  constructor() {
    this.quoteService = new QuoteService();
  }

  async attached() {
    this.quoteDetails = await this.quoteService.getQuoteDetails(this.id);
    console.log(this.quoteDetails);
    this.quoteDetail = this.removeEmptyRows(this.quoteDetails[0]);
    this.keys = Object.keys(this.quoteDetail)
    this.rows = this.quoteDetail._toMany_QuoteItem
    console.log(this.rows)
  }

  removeEmptyRows(obj) {
    var result = {}
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      var val = obj[keys[i]];
      if (val) {
        if (keys[i].toString().includes("Stamp") || keys[i].toString().includes("Date")) {
          result[keys[i]] = new Date(val).toLocaleString();
        } else {
          result[keys[i]] = val
        }
      }
    }
    return result;
  }

  activate(params) {
    this.id = params.id
    console.log(params)
  }
}
