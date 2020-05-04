import { HttpClient, json } from "aurelia-fetch-client";
import { autoinject } from 'aurelia-framework';


const bearerTokenPrefix = 'Bearer '
const noExpirationToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyTG9naW5JZCI6ImFkbWluIiwiaXNzIjoiQXBhY2hlT0ZCaXoiLCJleHAiOjE1ODc4NDI5OTk5OTk3MTgsImlhdCI6MTU4Nzg0MDkxOH0.3hZCbPuEoqQOUTYws1UtPToVuCZrQfaAVYkZIkPvAVd3m1cN-scUpIYErZFGTmMMfYHTEoMlbNlTG5l2GfkDVg'

@autoinject
export class QuoteService {
    baseUrl = 'http://client.flowerstore.ee/api/generic/v1/';

    constructor() {
        this.client = new HttpClient();
        this.client.configure(config => {
            config
              .withBaseUrl(this.baseUrl)
              .withDefaults({
                headers: {
                  'Accept': 'application/json',
                  'X-Requested-With': 'Fetch',
                  'Authorization': bearerTokenPrefix + noExpirationToken
                }
              })
              .withInterceptor({
                request(request) {
                  console.info(`Requesting ${request.method} ${request.url}`);
                  return request;
                },
                response(response) {
                  console.info(`Received ${response.status} ${response.url}`);
                  return response;
                }
              });
          });
        }

    getQuotes() {
        return this.client
        .fetch(`${this.baseUrl}entities/QuoteItem`)
        .then(response => response.json())
        .catch(reason => {
            console.error(reason);
            return [];
        });
    }
}
