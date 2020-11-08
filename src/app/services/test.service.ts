import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }

  private getPayURL = 'localhost:8081/alipay/gotoPayPage';
  getPayTest() {
    return this.http.post(this.getPayURL, null).toPromise();
  }

}
