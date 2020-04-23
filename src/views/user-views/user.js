import { UserService } from './user-service';

export class User {
    constructor() {
        this.userService = new UserService();
    }

    async attached() {
        this.users = await this.userService.getUser();
    }
}