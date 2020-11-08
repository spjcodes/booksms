import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
  httpOptions: any;
  constructor(private config: ConfigserviceService,
              private http: HttpClient,
              ) { }
  private loginURL = this.config.hostauth + '/login';
  login(username: string, upwd: string) {
    const p = {
      'username': username,
      'upwd': upwd
    };
    console.dir(p);
      return this.http.post(this.loginURL, p).toPromise();
  }

  renewHttpheaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    console.dir(this.httpOptions);
    return this.httpOptions;
  }

  private refreshTokenUrl = this.config.author + '/refreshToken';
  refreshToken() {
    this.http.get(this.refreshTokenUrl).toPromise()
      .then((data: any) => {
        if (data.token !== 'error') {
          localStorage.setItem('token', data.token);
        } else {
          data = {
            reason: '无权限访问',
            status: 401
          };
        }
      });
  }

  // private getRoleUrl = 'http://www.jiayeli.cn:8081/auth/getRole';
  private getRoleUrl = this.config.author + '/getRole';
  getRole() {
    return this.http.get(this.getRoleUrl).toPromise();
  }

}
