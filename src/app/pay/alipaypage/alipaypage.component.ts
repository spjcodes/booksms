import { Component, OnInit } from '@angular/core';
import {PaymanageService} from '../../services/paymanage.service';

@Component({
  selector: 'app-alipaypage',
  templateUrl: './alipaypage.component.html',
  styleUrls: ['./alipaypage.component.css']
})
export class AlipaypageComponent implements OnInit {
  formcon: any;
  private strHTML: any;
  constructor(private payService: PaymanageService,
              ) { }

  ngOnInit() {
  }

  gotopagepay() {
    // this.strHTML = this.payService.getAlipayForm();
    this.strHTML = '<form name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=UTF-8&method=alipay.trade.page.pay&sign=S%2Fl4x8tAudJ%2FuGC7eyT%2FcPXTpFOYqqvx86%2B7%2F6ZspozeaSTheX7PoAwhS%2FM3yyb0WvtThxXqgUur%2B90TXVTalFon8SNWsfYRQjx0famVCP7%2FsbFF%2Bk0D%2FfcaHtlOBACDzBX6FAg8G%2BZf3So3X5cbn2S4IwOfMkJ9hmLY%2FnXvXBBwZSCk%2B16k%2FAuRZzOQrRaNpOHkMui%2F1wkoeGHTKc5EDR8bc2U7ONqaC4%2FHqy%2FPXMumS1l4zgJeIoxfAsmxugUlgWM7HtfV4VNSMcyh2x7t4W3Af4fmL3ugt5YBmm1uiKKvHMsxM9b28A52ofuBHdtxZ4OWs7XHFKhvVDZLGyP7Qg%3D%3D&return_url=http%3A%2F%2Fs9v2cw.natappfree.cc%2Falipay%2Fpage%2FreturnUrl&notify_url=http%3A%2F%2F48bf6u.natappfree.cc%2Falipay%2Fnotify&version=1.0&app_id=2016092600598805&sign_type=RSA2&timestamp=2019-04-25+09%3A02%3A28&alipay_sdk=alipay-sdk-java-dynamicVersionNo&format=json">\n' +
      '    <input type="hidden" name="biz_content" value="{&quot;body&quot;:&quot;支付测试，共0.01元&quot;,&quot;out_trade_no&quot;:&quot;71438c55-bfc2-486f-bfb5-b6ca83cb83ef&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;,&quot;subject&quot;:&quot;支付测试&quot;,&quot;total_amount&quot;:&quot;0.01&quot;}">\n' +
      '    <input type="submit" value="立即支付"  >\n' +
      '</form>\n' +
      '<script>document.forms[0].submit();</script>';
    this.formcon = 'test text';
    // this.formcon = this.payService.gotoPayPage(this.strHTML);
    return this.payService.gotoPayPage(this.strHTML);
  }
}
