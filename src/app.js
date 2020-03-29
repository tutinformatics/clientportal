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
      {route: '', name: 'index', moduleId: PLATFORM.moduleName('index'), title: 'My orders'},
      {route: 'favorites', name: 'favorites', moduleId: PLATFORM.moduleName('favorites'), title: 'My favorites'},
      {route: 'user', name: 'user-settings', moduleId: PLATFORM.moduleName('user'), title: 'My settings'}
    ]);
  }
}
