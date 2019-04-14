import { Component, OnInit } from '@angular/core';
import {BookmanageService} from '../../services/bookmanage.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-detailbook',
  templateUrl: './detailbook.component.html',
  styleUrls: ['./detailbook.component.css']
})
export class DetailbookComponent implements OnInit {
  param: string;
  book: Book;
  constructor(private booksService: BookmanageService,
              private routerInfo: ActivatedRoute,
              ) {  }

  ngOnInit() {
    this.getBook();
  }

  private getBook() {
    this.param = this.routerInfo.snapshot.params['id'];
    this.booksService.getBook(this.param).then((data: any) => {
      if (data != null) {
        this.book = data;
      } else {
        alert('获取信息失败！');
      }
    });
  }
}
