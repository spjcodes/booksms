import { Component, OnInit } from '@angular/core';
import {UsermanageService} from '../../services/usermanage.service';
import {Router} from '@angular/router';
import {until} from 'selenium-webdriver';
import elementIsSelected = until.elementIsSelected;
import {User} from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  u: User;
  constructor(private userService: UsermanageService,
              private router: Router,
  ) { }

  ngOnInit() {
    this.u = new User();
  }

  onRegiest(value: any) {
    this.userService.addUser(value).then((flage: any) => {
      if (flage) {
        this.router.navigate(['login']);
      } else {
        alert('注册失败！请重试或联系管理员');
      }
    });
  }
}
