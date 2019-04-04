import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookmanageService} from '../../services/bookmanage.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-textbooks',
  templateUrl: './textbooks.component.html',
  styleUrls: ['./textbooks.component.css']
})
export class TextbooksComponent implements OnInit {
  books: Array<Book>;
  parm: string;
  type: string;

  constructor(private bookService: BookmanageService,
              private routerInfo: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.getBooks();
    this.setType();
  }

  private getBooks() {
    // this.parm = this.routerInfo.subscribe((parms: Params) => this.parm = parms['id']);
      this.parm  = this.routerInfo.snapshot.params['id'];
    this.bookService.getBookListByType(this.parm).then((bs: any) => {
      if (bs != null) {
        this.books = bs;
      } else {
        console.dir('get book list faild ...');
      }
    });
  }

  private setType() {
    switch (this.parm) {
      case 'financial':
        this.type = '财务会计教育'; break;
      case 'advertising':
        this.type = '广告学'; break;
      case 'pubmanser':
        this.type = '公共事业管理'; break;
      case 'businessadmin':
        this.type = '工商管理类'; break;
      case 'chinlanlite':
        this.type = '汉语言文学'; break;
      case 'inteeducninalean':
        this.type = '汉语国际教育'; break;
      case 'computer':
        this.type = '计算机类'; break;
      case 'toumanagement':
        this.type = '旅游管理'; break;
      case 'laolanguange':
        this.type = '老挝语'; break;
      case 'secrescien':
        this.type = '秘书学'; break;
      case 'marketing':
        this.type = '市场营销'; break;
      case 'humanresource':
        this.type = '人力资源管理'; break;
      case 'otherbooks':
        this.type = '其他类图书'; break;
    }
  }
}
