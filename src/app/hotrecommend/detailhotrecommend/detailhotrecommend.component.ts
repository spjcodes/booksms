import { Component, OnInit } from '@angular/core';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hotrecommend} from '../../model/hotrecommend';

@Component({
  selector: 'app-detailhotrecommend',
  templateUrl: './detailhotrecommend.component.html',
  styleUrls: ['./detailhotrecommend.component.css']
})
export class DetailhotrecommendComponent implements OnInit {

  param: string;
  hotrecomment: Hotrecommend;
  constructor(private hotrercommendService: HotrecommendService,
              private routerInfo: ActivatedRoute,
              private router: Router,
              ) { }

  ngOnInit() {
    this.param = this.routerInfo.snapshot.params['id'];
    this.getHotrecommend();
  }

  private getHotrecommend() {
    this.hotrercommendService.getHotrecommend(this.param).then((data: any) => {
      if ( data !== null ) {
        this.hotrecomment = data;
      }  else {
        alert('获取信息失败！');
      }
    });
  }

  toList() {
    this.router.navigate(['adminmanage/hotrecom']);
  }

  toChange(hid: string) {
    this.router.navigate(['./addHorrecommend', hid]);
  }
}
