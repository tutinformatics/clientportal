import {ShoppinglistService} from "../../_services/shoppinglist-service";

export class Cart {
  constructor() {
    this.shoppinglistService = new ShoppinglistService();
  }

  async attached() {
    this.shoppingLists = await this.shoppinglistService.getShoppingLists();
    console.log(this.shoppingLists);
  }
}
