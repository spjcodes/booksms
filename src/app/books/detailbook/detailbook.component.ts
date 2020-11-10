import { Component, OnInit } from '@angular/core';
import {BookmanageService} from '../../services/bookmanage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../model/book';
import {User} from '../../model/user';
import {Orderform} from '../../model/orderform';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {OrderformService} from '../../services/orderform.service';
import {UsermanageService} from '../../services/usermanage.service';

@Component({
  selector: 'app-detailbook',
  templateUrl: './detailbook.component.html',
  styleUrls: ['./detailbook.component.css']
})
export class DetailbookComponent implements OnInit {
  param: string;
  book: Book;
  newOrder: Orderform;

  constructor(private booksService: BookmanageService,
              private routerInfo: ActivatedRoute,
              private prodectService: HotrecommendService,
              private orderService: OrderformService,
              private userSer: UsermanageService,
              private router: Router
              ) {  }

  ngOnInit() {
    this.getBook();
  }

  private getBook() {
    this.param = this.routerInfo.snapshot.params['id'];
    this.booksService.getBook(this.param).then((data: any) => {
      if (data != null) {
        this.book = data;
      } else {
        alert('获取信息失败！');
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
      this.newOrder.ocost = this.book.bnewcost;
      this.newOrder.obook = this.book.bname;

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
