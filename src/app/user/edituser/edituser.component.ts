import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsermanageService} from '../../services/usermanage.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user: User;
  parm: string;
  private selectedFile: string;
  private url: string;
  private types: any;
  constructor(private router: Router,
              private routerInfo: ActivatedRoute,
              private userService: UsermanageService,
              private http: HttpClient,
              private author: AuthService,
  ) {

  }

  ngOnInit() {
    this.initSelectValues();
    this.initUser();
  }

  private initUser() {
    this.parm = this.routerInfo.snapshot.params['id'];
    console.dir('hello world ' + this.parm);
    if (this.parm === 'add') {
      console.dir('add user');
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
    if (localStorage.getItem('token') == null) {
      alert('权限不足！ 请登陆后重试！');
    }
    if (this.parm === 'add') {
      this.userService.addUser(user).then((flage: any) => {
        if (!flage) {
          alert('添加用户失败！');
        } else {
          this.router.navigate(['adminmanage/usermanage']);
        }
      });
    } else {
      this.userService.updateUser(user).then((flage: any) => {
        if (!flage) {
          alert('添加用户失败！');
        } else {
          this.router.navigate(['userinfochange']);
        }
      });
    }
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('uploadfile', this.selectedFile);
    this.http.post('http://www.jiayeli.cn:8081/public/uploadPic', uploadData/*, this.author.renewHttpheaders()*/).subscribe(
      // this.http.post('http://lo/calhost:8081/public/uploadPic', uploadData/*, this.author.renewHttpheaders()*/).subscribe(
      (data: any) => {
        if ( data != null) {
          this.url = 'http://www.jiayeli.cn:8081/pic/';
          // this.url = 'http://localhost:8081/pic/';
          this.user.uimage = this.url + data.cimg;
          console.dir(JSON.stringify(data));
          console.dir(this.user.uimage);
        } else {
          alert('文件上传失败！');
        }
      }, (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }


  onchange(key: any) {
    this.user.urole = this.types[key].value;
  }

  private initSelectValues() {
    this.types =
      [
        {key: '0' , value: 'admin'},
        {key: '1', value: 'user'},
      ];
  }
}
