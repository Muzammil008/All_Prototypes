import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommunicatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommunicatorProvider {
  servicePath: string="http://175.107.202.250:8083/";

  constructor(public http: HttpClient) {
    console.log('Hello CommunicatorProvider Provider');
  }
  getDataNoAuthenticate() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/2");
  }
  PostDataNoAuthenticate(url: string, method: string, data: any) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post(this.servicePath + method, data, { headers });
  }

}
