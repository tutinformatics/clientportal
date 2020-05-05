import { OrderService } from '../../_services/order-service';

export class Orders {
  constructor() {
      this.orderService = new OrderService();
  }

  async attached() {
    this.orderDetails = await this.orderService.getOrderDetails(this.id);
    console.log(this.orderDetails);
    this.orderAsText = JSON.stringify(this.orderDetails)
  }

  activate(params) {
    this.id = params.id
    console.log(params)
  }
}
