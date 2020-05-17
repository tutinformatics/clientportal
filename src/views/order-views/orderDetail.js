import { OrderService } from '../../_services/order-service';

export class Orders {
  constructor() {
      this.orderService = new OrderService();
  }

  async attached() {
    this.orderDetails = await this.orderService.getOrderDetails(this.id);
    console.log(this.orderDetails);
    this.orderDetail = this.removeEmptyRows(this.orderDetails[0]);
    this.keys = Object.keys(this.orderDetail)
    this.rows = this.orderDetail._toMany_OrderItem
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
