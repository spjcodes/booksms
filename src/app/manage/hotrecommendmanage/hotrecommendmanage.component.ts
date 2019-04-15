import { Component, OnInit } from '@angular/core';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {Hotrecommend} from '../../model/hotrecommend';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotrecommendmanage',
  templateUrl: './hotrecommendmanage.component.html',
  styleUrls: ['./hotrecommendmanage.component.css']
})
export class HotrecommendmanageComponent implements OnInit {

  hotrecommends: Array<Hotrecommend>;
  constructor(private hotreservice: HotrecommendService,
              private router: Router) {

  }

  ngOnInit() {
    this.getHotrecommendList();
  }

  getHotrecommendList() {
      this.hotreservice.getHotrecommendList().then((list: any) => {
        console.dir(list);
      this.hotrecommends = list;
    });
  }

  add() {
    this.router.navigate(['addHorrecommend', 'add']);
  }

  update(hid: string) {
    this.router.navigate(['addHorrecommend', hid]);
  }

  delete(hid: string) {
    this.hotreservice.deleteHotrecommend(hid).then((flage: boolean) => {
      if (flage !== true) {
        alert('删除失败！');
      } else {
        this.getHotrecommendList();
      }
    });
  }

  detail(hid: string) {
    this.router.navigate(['detailhotrecommed', hid]);
  }
}
