import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookmanageService} from '../../services/bookmanage.service';
import {Book} from '../../model/book';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {Hotrecommend} from '../../model/hotrecommend';
import {OrderformService} from '../../services/orderform.service';
import {Orderform} from '../../model/orderform';
import {User} from '../../model/user';
import {UsermanageService} from '../../services/usermanage.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  param: string;
  product: Hotrecommend;
  newOrder: Orderform;

  constructor(private routerInfo: ActivatedRoute,
              private prodectService: HotrecommendService,
              private orderService: OrderformService,
              private userSer: UsermanageService,
              private router: Router
              ) { }

  ngOnInit() {

    this.getDetail();
  }

  private getDetail() {
    this.param = this.routerInfo.snapshot.params['id'];
    this.prodectService.getHotrecommend(this.param).then((data: any) => {
      if ( data != null) {
        this.product = data;
 console.log(data);
      } else {
        alert('获取商品信息失败！');
      }
    });
  }

  buy() {
    const uid = localStorage.getItem('userId');
    if (uid == null) {
      this.router.navigate(['login']);
    }
    let uname = '';
    let phone = 0;
    this.userSer.getUser(uid).then((data: any) => {
      const user: User = data;
      uname = user.username;
      phone = user.umobile;
      if (uname == null) {
        this.router.navigate(['login']);
      }
      this.newOrder = new Orderform();
      this.newOrder.opurchaser = uname;
      this.newOrder.ovendor = phone.toString();
      this.newOrder.ocost = this.product.hcost;
      this.newOrder.obook = this.product.hname;

      this.orderService.creatOrderForm(this.newOrder).then((d: any) => {
        if (d === true) {

          alert('下单成功，请前往订单中心进行查看');
        } else {
          alert('网络异常，下单失败');
        }
      });
    });

    this.newOrder.opurchaser = '';
    this.newOrder.ovendor = '';
    this.newOrder.ocost = null;
    this.newOrder.obook = '';
  }
}
