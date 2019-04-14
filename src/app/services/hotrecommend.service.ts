import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient} from '@angular/common/http';
import {Hotrecommend} from '../model/hotrecommend';

@Injectable()
export class HotrecommendService {

  constructor(private config: ConfigserviceService ,
              private http: HttpClient) {
  }

  private addHotrecommendURL = this.config.hsot + '/addHotrecommend';
  addHotrecomment(hotrcommend: Hotrecommend) {
    const p = {
      'hname': hotrcommend.hname,
      'himage': hotrcommend.himage,
      'hintro': hotrcommend.hintro,
      'hstar': hotrcommend.hstar,
      'hcost': hotrcommend.hcost
    }
    return this.http.post(this.addHotrecommendURL, p).toPromise();
  }

  private deleteHotrecommendURL = this.config.hsot + '/deleteHotrecommend';
  deleteHotrecommend(id: string) {
    const p = {
      'hid': id
    }
      return this.http.post(this.deleteHotrecommendURL, p).toPromise();
  }

  private updateHotrecommendURL = this.config.hsot +  '/updateHotrecommend';
  updateHotrecommend(hotre: Hotrecommend) {
    const p = {
      'hid': hotre.hid,
      'hname': hotre.hname,
      'himage': hotre.himage,
      'hintro': hotre.hintro,
      'hstar': hotre.hstar,
      'hcost': hotre.hcost
    }
    return this.http.post(this.updateHotrecommendURL, p).toPromise();
  }

  private getHotrecommendURL = this.config.hsot +   '/getHotrecommend';
  getHotrecommend(id: string) {
    // @ts-ignore
    let p  = {
      'hid': id
    }
    return this.http.post('http://localhost:8081/manage/getHotrecommend', p).toPromise();
  }

  private getHotrecommendListURL = this.config.hsot +  '/getHotrecommendList';
  getHotrecommendList(){
    return this.http.get(this.getHotrecommendListURL).toPromise();
  }



}
