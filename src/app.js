import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { PLATFORM } from "aurelia-framework";

export class App {
  constructor() {

  }
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Admin App';
    config.map([
      {route: '', name: 'index', moduleId: PLATFORM.moduleName('./views/order-views/index'), title: 'Orders', settings: {data: 'box icon'}},
      {route: 'favorites', name: 'favorites', moduleId: PLATFORM.moduleName('./views/order-views/favorites'), title: 'Favorites', settings: {data: 'star outline'}},
      {route: 'cart', name: 'cart', moduleId: PLATFORM.moduleName('./views/cart-view/cart'), title: 'Cart', settings: {data: 'shopping cart icon'}},
      {route: 'offers', name: 'offers', moduleId: PLATFORM.moduleName('./views/order-views/offers'), title: 'Offers', settings: {data: 'fire alternate icon'}},
      {route: 'invoices', name: 'invoices', moduleId: PLATFORM.moduleName('./views/invoice-views/invoices'), title: 'Invoices', settings: {data: 'file alternate outline icon'}}
      //{route: 'user', name: 'user-settings', moduleId: PLATFORM.moduleName('./views/user-views/user'), title: 'Settings', settings: {data: 'user cog'}}
    ]);
    config.mapRoute(
      {route: 'user', moduleId: PLATFORM.moduleName('./views/user-views/user'), settings: {data: 'user cog'}}

    )
  }
}
