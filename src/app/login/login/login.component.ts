import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UsermanageService} from '../../services/usermanage.service';
import {User} from '../../model/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: User;

  constructor(private router: Router,
              private authService: AuthService,

              ) { }

  ngOnInit() {
    this.u = new User();
  }

  toRegister() {
    this.router.navigate(['register']);
  }

  login(username: any, upwd: any) {
console.log(username + ' *********  ' + upwd);
    this.authService.login(username, upwd).then((date: any) => {
console.dir(date);
      if (date.msg === 'erro') {
        alert('登录失败！');
      } else if (date.msg === 'ok') {
        this.router.navigate(['pageone']);
     } else {
        alert('呀！！网络传输出错了！');
      }
      // 将token存储入浏览器localStorage中
      localStorage.setItem('token', date.token);
    });
  }

}
