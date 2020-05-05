import { HttpClient } from "aurelia-fetch-client";
import { autoinject } from 'aurelia-framework';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyTG9naW5JZCI6ImFkbWluIiwiaXNzIjoiQXBhY2hlT0ZCaXoiLCJleHAiOjE1ODc4NDI5OTk5OTk3MTgsImlhdCI6MTU4Nzg0MDkxOH0.3hZCbPuEoqQOUTYws1UtPToVuCZrQfaAVYkZIkPvAVd3m1cN-scUpIYErZFGTmMMfYHTEoMlbNlTG5l2GfkDVg'
const userLogin =  {"_ENTITY_NAME_": "UserLogin","currentPassword": "{SHA}47b56994cbc2b6d10aa1be30f70165adb305a41a","userLoginId": "admin"}

@autoinject
export class Service {
  baseUrl = "api/generic/v1/";

  constructor() {
    this.client = new HttpClient();
    this.client.configure(config => {
      config
        .withBaseUrl(this.baseUrl)
        .withDefaults({
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        })
        .withInterceptor({
          request(request) {return request;},
          response(response) {return response;}
        });
    });
  }

  get(url) {
    return this.client
      .fetch(url)
      .then(response => response.json())
      .catch(reason => {
        console.error(reason);
        return [];
      });
  }

  post(url, body) {
    return this.client.fetch(url, {
        method: "post",
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .catch(reason => {
        console.error(reason);
        return [];
      });
  }

  service(name, body = {}) {
    return this.client.fetch(url, {
      method: "post",
      body: JSON.stringify(Object.assign(body, {"userLogin": userLogin}))
    })
      .then(response => response.json())
      .catch(reason => {
        console.error(reason);
        return [];
      });
  }
}
