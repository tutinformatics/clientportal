import { OrderService } from '../../_services/order-service';

export class Index {
    constructor() {
        this.orderService = new OrderService();
    }

    async attached() {
        this.orders = await this.orderService.getOrders();
        console.log(this.orders);
    }
}
