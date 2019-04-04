import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsermanageService} from '../../services/usermanage.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user: User;
  parm: string;
  constructor(private router: Router,
              private routerInfo: ActivatedRoute,
              private userService: UsermanageService) { }

  ngOnInit() {
    this.initUser();
  }

  private initUser() {
    this.parm = this.routerInfo.snapshot.params['id'];
    console.dir(this.parm);
    if (this.parm === 'add') {
      this.user = new User();
    } else {
      this.getUser();
    }
  }

  private getUser() {
    this.userService.getUser(this.parm).then((date: any) => {
      if (date !== null) {
        this.user = date;
      }  else {
        console.log('获取用户失败！');
      }
    });
  }

  reset() {
    this.user.username = null;
    this.user.uaddress = null;
    this.user.ugrade = null;
    this.user.udiscounts  = null;
    this.user.umobile = null;
    this.user.upwd = null;
  }

  save(user: User) {
    if (this.parm === 'add') {
      this.userService.addUser(user).then((flage: boolean) => {
        if (!flage) {
          alert('添加用户失败！');
        } else {
          this.router.navigate(['adminmanage/usermanage']);
        }
      });
    } else {
      this.userService.updateUser(user).then((flage: boolean) => {
        if (!flage) {
          alert('添加用户失败！');
        } else {
          this.router.navigate(['adminmanage/usermanage']);
        }
      });
    }
  }
}
