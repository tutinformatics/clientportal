import { UserService } from '../../_services/user-service';

export class User {
  constructor() {
    this.users = {};
    this.userService = new UserService();
  }

  async attached() {
    this.contactData = await this.userService.getContactData();
    this.personData = await this.userService.getPersonData();
    // TODO Remove below lines
    console.log("Contact Data:")
    console.log(this.contactData);
    console.log("Person Data:")
    console.log(this.personData)
    this.tempData = JSON.stringify(this.contactData);
    this.tempData2 = JSON.stringify(this.personData);
  }
}
