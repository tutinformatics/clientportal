import { QuoteService } from '../../_services/quote-service';

export class Quotes {
  constructor() {
    this.quoteService = new QuoteService();
  }

  async attached() {
    this.quotes = await this.quoteService.getQuotes();
    console.log(this.quotes);
    this.quotes = this.convertDates(this.quotes);
  }

  convertDates(orders) {
    var result = []
    for (let i = 0; i < orders.length; i++) {
      orders[i].issueDate = new Date(orders[i].issueDate).toLocaleString();
      result.push(orders[i])
    }
    return result;
  }
}
