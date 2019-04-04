import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookmanageService} from '../../services/bookmanage.service';

@Component({
  selector: 'app-novelbooks',
  templateUrl: './novelbooks.component.html',
  styleUrls: ['./novelbooks.component.css']
})
export class NovelbooksComponent implements OnInit {
  books: Array<Book>;
  parm: string;
  type: string;


  constructor(private ruter: Router,
              private routerInfo: ActivatedRoute,
              private bookService: BookmanageService) { }

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.parm = this.routerInfo.snapshot.params['id'];
    switch (this.parm) {
      case 'modern' :
        this.type = '现当代小说'; break;
      case 'classical' :
        this.type = '经典小说'; break;
      case 'detective' :
        this.type = '侦探| 推理| 悬疑小说'; break;
      case 'gongfu' :
        this.type = '武侠小说'; break;
      case 'science' :
        this.type = '科幻小说'; break;
      case 'other' :
        this.type = '其他'; break;
    }
    this.bookService.getBookListByType(this.parm).then((date: any) => {
 console.dir(date)
      if (date !== null) {
        this.books = date;
      } else {
        console.log('get books faild ..');
      }
    });

  }
}
