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
      {route: '', name: 'index', moduleId: PLATFORM.moduleName('index'), title: 'Orders', settings: {data: 'home'}},
      {route: 'favorites', name: 'favorites', moduleId: PLATFORM.moduleName('favorites'), title: 'Favorites', settings: {data: 'star outline'}},
      {route: 'user', name: 'user-settings', moduleId: PLATFORM.moduleName('user'), title: 'Settings', settings: {data: 'user cog'}},
      {route: 'cart', name: 'cart', moduleId: PLATFORM.moduleName('cart'), title: 'Cart', settings: {data: 'shopping cart icon'}},
      {route: 'offers', name: 'offers', moduleId: PLATFORM.moduleName('offers'), title: 'Offers', settings: {data: 'fire alternate icon'}},
      {route: 'orders', name: 'orders', moduleId: PLATFORM.moduleName('orders'), title: 'Completed orders', settings: {data: 'box icon'}},
      {route: 'invoices', name: 'invoices', moduleId: PLATFORM.moduleName('invoices'), title: 'Invoices', settings: {data: 'file alternate outline icon'}}
    ]);
  }
}
