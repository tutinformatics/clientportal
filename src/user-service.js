import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class UserService {
  constructor() {
    this.client = new HttpClient;

    const baseUrl = 'http://161.35.21.253:4567/api/';

    this.client.configure(config => {
      config.withBaseUrl(baseUrl)
        .withDefaults({
          mode: 'cors',
          headers: {
            'Accept': 'application/json'
          }
        });
    })
  }

  async getUser() {
    try {
      const response = await this.client.fetch('contact');
      console.log(response);
      return response.json();
    } catch (e) {
      console.log("User:", e);
    }
  }
}
