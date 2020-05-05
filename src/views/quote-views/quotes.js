import { QuoteService } from '../../_services/quote-service';

export class Quotes {
    constructor() {
        this.quoteService = new QuoteService();
    }

    async attached() {
        this.quotes = await this.quoteService.getQuotes();
        console.log(this.quotes);
    }
}
