import { OrderService } from '../../_services/order-service';

export class Orders {
  constructor() {
    this.orderService = new OrderService();
  }

  async attached() {
    this.orders = await this.orderService.getCustomerOrders();
    console.log(this.orders);
    this.orders = this.convertDates(this.orders);
  }

  convertDates(orders) {
    var result = []
    for (let i = 0; i < orders.length; i++) {
      orders[i].orderDate = new Date(orders[i].orderDate).toLocaleString();
      result.push(orders[i])
    }
    return result;
  }
}
