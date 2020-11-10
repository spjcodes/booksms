import { Component, OnInit } from '@angular/core';
import {Orderform} from '../../model/orderform';
import {OrderformService} from '../../services/orderform.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {orders: Array<Orderform>;

  constructor(private orderSer: OrderformService) { }

  ngOnInit() {
    this.initOrderList();
  }


  delete(oid: any) {
    this.orderSer.deleteOrderById(oid).then((data: any) => {
      this.initOrderList();
    });
  }

  private initOrderList() {
    this.orders = new Array<Orderform>();
    this.orderSer.getOrderList().then((data: any) => {
      this.orders = data;
    });
  }
}
