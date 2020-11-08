import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookmanageService} from '../../services/bookmanage.service';
import {Book} from '../../model/book';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {Hotrecommend} from '../../model/hotrecommend';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  param: string;
  product: Hotrecommend;
  constructor(private routerInfo: ActivatedRoute,
              private prodectService: HotrecommendService,
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
    alert('购买成功');
  }
}
