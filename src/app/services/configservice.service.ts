import { Injectable } from '@angular/core';

@Injectable()
export class ConfigserviceService {

  hsot: string;
  gethost: string;
  hostauth: string;
  author: string;
  constructor() {
    this.hsot = 'http://localhost:8081/manage';
    this.hostauth = 'http://localhost:8081/public';
    this.gethost = 'http://localhost:8081/public';
    this.author = 'http://localhost:8081/auth';

 /*   this.hsot = 'http://www.jiayeli.cn:8081/manage';
    this.hostauth = 'http://www.jiayeli.cn:8081/public';
    this.gethost = 'http://www.jiayeli.cn:8081/public';
    this.author = 'http://www.jiayeli.cn:8081/auth';*/
}

}
