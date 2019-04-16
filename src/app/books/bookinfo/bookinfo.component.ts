import { Component, OnInit } from '@angular/core';
import {Hotrecommend} from '../../model/hotrecommend';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../model/book';
import {BookmanageService} from '../../services/bookmanage.service';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrls: ['./bookinfo.component.css']
})
export class BookinfoComponent implements OnInit {
  param: string;
  book: Book;
  constructor(private bookService: BookmanageService,
              private routerInfo: ActivatedRoute,
              private router: Router,
  ) { }

  ngOnInit() {
    this.param = this.routerInfo.snapshot.params['id'];
    this.getbook();
  }

  private getbook() {
    this.bookService.getBook(this.param).then((data: any) => {
      if ( data !== null ) {
        this.book = data;
      }  else {
        alert('获取信息失败！');
      }
    });
  }

  toList() {
    this.router.navigate(['adminmanage/bookmanage']);
  }



  toUpdate(bid: string) {
    this.router.navigate(['addbook', bid]);
  }
}

