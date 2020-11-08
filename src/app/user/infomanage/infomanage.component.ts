import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UsermanageService} from '../../services/usermanage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigserviceService} from '../../services/configservice.service';

@Component({
  selector: 'app-infomanage',
  templateUrl: './infomanage.component.html',
  styleUrls: ['./infomanage.component.css']
})
export class InfomanageComponent implements OnInit {
  user: User;
  parm: string;

  constructor(private userService: UsermanageService,
              private router: Router,
              private routerInfo: ActivatedRoute,
              private config: ConfigserviceService
  ) {
  }

  ngOnInit() {
    this.getUser();
  }


  private getUser() {
    this.user = new User();
    this.userService.getUser(localStorage.getItem('userId')).then((data: any) => {
      if (data !== null) {
        this.user = data;
        console.dir('user info:' + this.user);
      } else {
        alert('获取用户信息失败！');
      }
    });
   /* this.getUserid();
    this.userService.getUserId().then((data: any) => {
      console.log('start get user .................;;;;;;;;;;;id' + this.parm)
      if (data !== null) {
        this.user = data;
        console.dir('user info:' + this.user);
      } else {
        alert('获取用户信息失败！');
      }
    });*/
  }

  goBack() {
    this.router.navigate(['/pageone']);
  }

  getUserid() {
    this.userService.getUserId().then((data: any) => {
      this.parm = data.id;
      console.log(this.parm);
    });

  }

  toUpdate(uid: string) {
    this.router.navigate(['edituser', uid]);
  }
}
