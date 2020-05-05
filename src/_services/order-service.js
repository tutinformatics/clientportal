import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class OrderService extends Service {
  getOrders() {
    return this.get("entities/OrderHeader");
  }

  getOrderDetails(id) {
    return this.post("entityquery/OrderHeader", {
      "inputFields": {"orderId": id},
      "entityRelations": {"_toMany_OrderItem": {}}
    })
  }
}
