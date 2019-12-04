import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UsermanageService} from '../../services/usermanage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.css']
})
export class UsermanageComponent implements OnInit {

  users: Array<User>;
  user: User;

  constructor(private  userService: UsermanageService,
              private router: Router,
              ) { }

  ngOnInit() {
    this.getUserList();
  }

  private getUserList() {
    this.userService.getUserList().then((date: any) => {
      if (date == null) {
        console.log('getuserlist faild it is null..');
      } else {
        this.users = date;
      }
    });
  }

  add() {
    this.router.navigate(['adduser', 'add']);
  }

  update(uid: string) {
    this.router.navigate(['adduser', uid]);
  }

  detail(uid: string) {
    this.router.navigate(['userdetail', uid]);
  }

  delete(uid: string) {
    this.userService.deleteUser(uid).then((flage: any) => {
      if (!flage) {
        alert('删除失败！');
      } else {
        this.getUserList();
      }
    });
  }
}
