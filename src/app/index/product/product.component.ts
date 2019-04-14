import { Component, OnInit } from '@angular/core';
import {Hotrecommend} from '../../model/hotrecommend';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  hotrecommends: Array<Hotrecommend>;

  constructor(private hotservice: HotrecommendService,
              private router: Router) {

  }

  ngOnInit() {
    this.gethotrecommends();
  }

  gethotrecommends() {
    this.hotservice.getHotrecommendList().then((hots: any) => {
      this.hotrecommends = hots;
    });
  }

  toProductDetail(hid: string) {
    this.router.navigate(['productdetail', hid]);
  }
}
