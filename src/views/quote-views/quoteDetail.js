import { QuoteService } from '../../_services/quote-service';

export class Quotes {
  constructor() {
    this.quoteService = new QuoteService();
  }

  async attached() {
    this.quoteDetails = await this.quoteService.getQuoteDetails(this.id);
    console.log(this.quoteDetails);
    this.quoteAsText = JSON.stringify(this.quoteDetails)
  }

  activate(params) {
    this.id = params.id
    console.log(params)
  }
}
