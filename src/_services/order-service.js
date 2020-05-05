import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class OrderService extends Service {
  getOrders() {
    return this.get("entities/OrderHeader");
  }

  getCustomerOrders() {
    return this.post("entityquery/OrderHeader", {
      "areRelationResultsMandatory": true,
      "entityRelations": {
        "_toOne_OrderRole": {
          "inputFields" : {
            "partyId": "DemoCustomer"
          }
        }
      }
    });
  }

  getOrderDetails(id) {
    return this.post("entityquery/OrderHeader",{
      "inputFields" : { "orderId": id },
      "entityRelations": { "_toMany_OrderItem": {} }
    })
  }

}
