import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient} from '@angular/common/http';
import {Orderform} from '../model/orderform';

@Injectable()
export class OrderformService {

  constructor(private config: ConfigserviceService, private http: HttpClient) { }

  private getOrderListURL = this.config.gethost + '/getOrderFormList';
   getOrderList() {
    return this.http.get(this.getOrderListURL).toPromise();
  }

  private deleteOrderByIdURL = this.config.gethost + '/deleteOrderFormById';
  deleteOrderById(bid: any) {
    return this.http.post(this.deleteOrderByIdURL, {'oid': bid}).toPromise();
  }

  private getOrderListByUserURL = this.config.gethost + '/getOrderFormListByUser';
  getOrderListByUser(uname: string) {
    console.log(uname + '.........' + this.getOrderListByUserURL);
    return this.http.post(this.getOrderListByUserURL, {'opurchaser': uname}).toPromise();
  }

  private createNewOrderURL = this.config.gethost + '/addOrderForm';
  creatOrderForm(newOrder: Orderform) {
    return this.http.post(this.createNewOrderURL, newOrder).toPromise();
  }
}
