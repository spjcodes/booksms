import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UsermanageService} from '../../services/usermanage.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: User;

  constructor(private router: Router,
              private userServivce: UsermanageService,
              ) { }

  ngOnInit() {
    this.u = new User();
  }

  toRegister() {
    this.router.navigate(['register']);
  }

  login(username: any, upwd: any) {
console.log(username + ' *********  ' + upwd);
    this.userServivce.login(username, upwd).then((date: any) => {
console.dir(date);
      if (date == null) {
        alert('登录失败！');
      } else {
        this.router.navigate(['pageone']);
     }
    });
  }
}
