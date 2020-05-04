import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class OrderService extends Service {
    getOrders() {
        return this.client
            .fetch("entities/OrderItem")
            .then(response => response.json())
            .catch(reason => {
                console.error(reason);
                return [];
        });
    }
}
