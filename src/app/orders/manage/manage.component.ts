import { Component, OnInit } from '@angular/core';
import {OrderformService} from '../../services/orderform.service';
import {Orderform} from '../../model/orderform';
import {UsermanageService} from '../../services/usermanage.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  orders: Array<Orderform>;

  constructor(private orderSer: OrderformService, private userSer: UsermanageService) { }

  ngOnInit() {
    this.initOrderList();
  }


  delete(oid: any) {
    this.orderSer.deleteOrderById(oid).then((data: any) => {
      this.initOrderList();
    });
  }

  private initOrderList() {
    const uid = localStorage.getItem('userId');
    let uname = '';
    this.userSer.getUser(uid).then((data: any) => {
     const user: User =  data;
     uname = user.username;
     console.log(uname);

      this.orders = new Array<Orderform>();
      this.orderSer.getOrderListByUser(uname).then((d: any) => {
        this.orders = d;
        console.dir(d);
      });
    });

  }
}
