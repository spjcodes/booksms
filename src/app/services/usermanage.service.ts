import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {AuthService} from './auth.service';

@Injectable()
export class UsermanageService {
  private httpOptions: any;

  constructor(private config: ConfigserviceService,
              private http: HttpClient,
              private authService: AuthService
  ) {
    this.httpOptions = this.authService.renewHttpheaders();
  }

  private loginURL = this.config.hsot + '/login';
  login(username: string, pwd: string) {
    let p = {
      'username': username,
      'upwd': pwd
    }
    return this.http.post(this.loginURL, p, this.httpOptions).toPromise();
  }

  private addUserURL = this.config.hsot + '/addUser';
  addUser(user: User) {
    let p = {
      'username': user.username,
      'uaddress': user.uaddress,
      'udiscounts': user.udiscounts,
      'ugrade': user.ugrade,
      'umobile': user.umobile,
      'upwd': user.upwd,
      'urole': user.urole,
      'uimage': user.uimage
    };
    return this.http.post(this.addUserURL, p, this.httpOptions).toPromise();
  }

  private deleteUserURL = this.config.hsot + '/deleteUser';
  deleteUser(id: string) {
    let p =  {
      'uid': id
    }
    return this.http.post(this.deleteUserURL, p, this.httpOptions).toPromise();
  }

  private updateUserURL = this.config.hsot + '/updateUser';
  updateUser(user: User) {
    let p = {
      'uid': user.uid,
      'username': user.username,
      'uaddress': user.uaddress,
      'udiscounts': user.udiscounts,
      'ugrade': user.ugrade,
      'umobile': user.umobile,
      'upwd': user.upwd,
      'urole': user.urole,
      'uimage': user.uimage
    }
    return this.http.post(this.updateUserURL, p, this.httpOptions).toPromise();
  }

  private getUserURL = 'http://www.jiayeli.cn:8081/public/getUser';
  // private getUserURL = 'http://localhost:8081/public/getUser';
   getUser(id: string) {
     const p =  {
       'uid': id.toString()
     }
     console.log('//////////////uid:' + id + 'p:' + p.uid );
     return this.http.post(this.getUserURL, p).toPromise();
  }

  private getUserListURL = this.config.hostauth + '/getUserList';
   getUserList() {
    return this.http.get(this.getUserListURL).toPromise();
   }

   private getUserRolURL = this.config.author + '/getRole';
   getUserRol() {
     return this.http.get(this.getUserRolURL).toPromise();

   }

   // private getUserIdURL = this.config.author + '/getUserId';
   private getUserIdURL = this.config.author + '/getUserId';
   getUserId() {
     return this.http.get(this.getUserIdURL ).toPromise();
   }

   private getUserIdByUserInfoUrl = this.config.author + '/getUserIdByUserInfo'
  getUserIdByUserInfo(u: User) {
     const p = {
       'username': u.username,
       'upwd': u.upwd
     };
     return this.http.post(this.getUserIdByUserInfoUrl, p).toPromise();
  }
}
