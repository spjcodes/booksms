import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'tohtml'
})
export class TohtmlPipe implements PipeTransform {

  constructor(private _html2text: DomSanitizer) {

  }

  transform(html: any, args?: any): any {
    return this._html2text.bypassSecurityTrustHtml(html);
  }

}
