import { UserService } from '../../_services/user-service';

export class User {
  constructor() {
    this.users = {};
    this.userService = new UserService();
  }

  async attached() {
    this.contactData = await this.userService.getContactData();
    this.personData = await this.userService.getPersonData();
    this.addresses = this.getMechsByType(this.contactData.valueMaps, "POSTAL_ADDRESS");
    this.emails = this.getMechsByType(this.contactData.valueMaps, "EMAIL_ADDRESS");
    this.phoneNumbers = this.getMechsByType(this.contactData.valueMaps, "TELECOM_NUMBER");
  }

  getMechsByType(mechs, type) {
    var result = [];
    for (let i = 0; i < mechs.length; i++) {
      if (mechs[i].contactMech.contactMechTypeId === type) {
        result.push(mechs[i])
      }
    }
    return result;
  }
}
