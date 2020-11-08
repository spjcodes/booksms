import { Component, OnInit } from '@angular/core';
import {PaymanageService} from '../../services/paymanage.service';
import {ActivatedRoute} from '@angular/router';
import {BookmanageService} from '../../services/bookmanage.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-alipaypage',
  templateUrl: './alipaypage.component.html',
  styleUrls: ['./alipaypage.component.css']
})
export class AlipaypageComponent implements OnInit {
  product: Book;
  constructor(private payService: PaymanageService,private routerInfo: ActivatedRoute,
              private bookSer: BookmanageService,
              ) { }

  ngOnInit() {
    this.product = new Book();
    const id = this.routerInfo.snapshot.params['id'];
    console.dir(id);
    this.bookSer.getBook(id).then((data: any) => {
     this.product = data;
   });

  }

  gotopagepay() {

    alert('支付成功');
  }
}
