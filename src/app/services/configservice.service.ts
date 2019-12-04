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
    this.author = 'http://localhot:8081/auth';
}

}
