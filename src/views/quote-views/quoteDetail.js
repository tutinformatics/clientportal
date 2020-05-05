import { QuoteService } from '../../_services/quote-service';

export class Quotes {
  constructor() {
    this.quoteService = new QuoteService();
  }

  async attached() {
    this.quoteDetails = await this.quoteService.getQuoteDetails(this.id);
    console.log(this.quoteDetails);
    this.quoteAsText = JSON.stringify(this.quoteDetails)
    this.quoteDetail = this.quoteDetails[0]
    this.keys = Object.keys(this.quoteDetail)
    this.rows = this.quoteDetail._toMany_QuoteItem
    console.log(this.rows)
  }

  activate(params) {
    this.id = params.id
    console.log(params)
  }
}
