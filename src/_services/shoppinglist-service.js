import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class ShoppinglistService extends Service {
  getShoppingLists() {
    return this.get("entities/ShoppingList?partyId=DEMO_CUSTOMER");
  }

  getShoppingListDetails(id) {
    return this.post("entityquery/ShoppingList",{
      "inputFields" : { "shoppingListId": id },
      "entityRelations": { "_toMany_ShoppingListItem": {} }
    })
  }
}
