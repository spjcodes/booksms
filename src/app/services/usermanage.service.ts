import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable()
export class UsermanageService {

  constructor(private config: ConfigserviceService,
              private http: HttpClient
  ) { }

  private loginURL = this.config.hsot + '/login';
  login(username: string, pwd: string) {
    let p = {
      'username': username,
      'upwd': pwd
    }
    return this.http.post(this.loginURL, p).toPromise();
  }

  private addUserURL = this.config.hsot + '/addUser';
  addUser(user: User){
    let p = {
      'username': user.username,
      'uaddress': user.uaddress,
      'udiscounts': user.udiscounts,
      'ugrade': user.ugrade,
      'umobile': user.umobile,
      'upwd': user.upwd,
      'urole': user.urole
    }
    return this.http.post(this.addUserURL, p).toPromise();
  }

  private deleteUserURL = this.config.hsot + '/deleteUser';
  deleteUser(id: string){
    let p =  {
      'uid': id
    }
    return this.http.post(this.deleteUserURL, p).toPromise();
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
      'urole': user.urole
    }
    return this.http.post(this.updateUserURL, p).toPromise();
  }

  private getUserURL = this.config.hsot + '/getUser';
   getUser(id: string){
     let p =  {
       'uid': id
     }
     return this.http.post(this.getUserURL, p).toPromise();
  }

  private getUserListURL = this.config.hsot + '/getUserList';
   getUserList() {
    return this.http.get(this.getUserListURL).toPromise();
   }

}
