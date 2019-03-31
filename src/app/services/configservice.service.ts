import { Injectable } from '@angular/core';

@Injectable()
export class ConfigserviceService {

  hsot: string;
  constructor() {
    this.hsot = 'http://localhost:8081/manage';
  }

}
