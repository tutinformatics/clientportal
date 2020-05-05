import { autoinject } from 'aurelia-framework';
import {Service} from "./service";

@autoinject
export class UserService extends Service {
  getContactData() {
    return this.service("getPartyContactMechValueMaps", {"partyId": "DemoCustomer"})
  }

  getPersonData() {
    return this.service("getPerson", {"partyId": "DemoCustomer"});
  }
}
