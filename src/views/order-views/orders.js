import { OrderService } from '../../_services/order-service';

export class Orders {
    constructor() {
        this.orderService = new OrderService();
    }

    async attached() {
        this.orders = await this.orderService.getCustomerOrders();
        console.log(this.orders);
    }
}
