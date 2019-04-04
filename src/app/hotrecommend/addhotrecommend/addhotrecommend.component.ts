import { Component, OnInit } from '@angular/core';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hotrecommend} from '../../model/hotrecommend';
import {b, v} from '@angular/core/src/render3';

@Component({
  selector: 'app-addhotrecommend',
  templateUrl: './addhotrecommend.component.html',
  styleUrls: ['./addhotrecommend.component.css']
})
export class AddhotrecommendComponent implements OnInit {

  parm: string;
  hotrecommend: Hotrecommend;

  constructor(private hotservice: HotrecommendService,
              private router: Router,
              private routerinfo: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.parm = this.routerinfo.snapshot.params['id'];
    if (this.parm === 'add') {
      this.hotrecommend = new Hotrecommend();
    } else {
      this.getSingleHotrecommend(this.parm);
    }
  }

  save(value: any) {
    console.dir(value);
    if (this.parm === 'add') {
      this.hotservice.addHotrecomment(value).then((flage: boolean) => {
        if (flage) {
          this.router.navigate(['adminmanage/hotrecom']);
        } else {
          alert('添加失败！');
        }
      });
    } else {
      this.hotservice.updateHotrecommend(value).then((flage: boolean) => {
        if (flage) {
          this.router.navigate(['adminmanage/hotrecom']);
        } else {
          alert('添加失败！');
        }
      });
    }

  }

  private getSingleHotrecommend(hid: string) {
    this.hotservice.getHotrecommend(hid).then((hotre: any) => {
      this.hotrecommend = hotre;
    });
  }


  reset() {
    this.hotrecommend.hstar = undefined;
    this.hotrecommend.hname = undefined;
    this.hotrecommend.hintro = undefined;
    this.hotrecommend.himage = undefined;
  }
}
