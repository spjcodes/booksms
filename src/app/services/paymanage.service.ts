import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class PaymanageService {
  private sanitizer: DomSanitizer;

  constructor(private config: ConfigserviceService,
              private http: HttpClient
              ) { }

  // 动态加载HTML代码
  gotoPayPage(strHTML: any) {
      return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }

  private gotoPayPageURL = 'http://www.jiayeli.cn:8081/alipay/gotoPayPage';
  getAlipayForm() {
    let p = {};
    return this.http.post(this.gotoPayPageURL, p).toPromise();
  }
}
