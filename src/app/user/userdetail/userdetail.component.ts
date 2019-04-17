import { Component, OnInit } from '@angular/core';
import {UsermanageService} from '../../services/usermanage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  user: User;
  parm: string;
  constructor(private userService: UsermanageService,
              private router: Router,
              private routerInfo: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.getUser();
  }


  private getUser() {
    this.parm = this.routerInfo.snapshot.params['id'];
    this.userService.getUser(this.parm).then((data: any) => {
      if (data != null) {
        this.user = data;
      } else {
        alert('获取用户信息失败！');
      }
    });
  }

  goBack() {
    this.router.navigate(['/adminmanage/usermanage']);
  }

  toUpdate(id: string) {
    this.router.navigate(['adduser', id]);
  }
}
