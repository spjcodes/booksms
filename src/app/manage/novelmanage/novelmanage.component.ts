import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {Router} from '@angular/router';
import {BookmanageService} from '../../services/bookmanage.service';
import {b} from '@angular/core/src/render3';

@Component({
  selector: 'app-novelmanage',
  templateUrl: './novelmanage.component.html',
  styleUrls: ['./novelmanage.component.css']
})
export class NovelmanageComponent implements OnInit {
  novel: Book;
  novels: Array<Book>;

  constructor(private router: Router,
              private  bookService: BookmanageService,
              ) { }

  ngOnInit() {
    this.getBookList();
  }

  add() {
    this.router.navigate(['addbook', 'add']);
  }

  update(bid: string) {
    this.router.navigate(['addbook', bid]);
  }

  detail(bid: string) {
    this.router.navigate(['detailbook', bid]);
  }

  delete(bid: string) {
    this.bookService.deleteBook(bid).then((flage: boolean) => {
      if (flage) {
        this.getBookList();
      } else {
        alert('删除失败！');
      }
    });
  }



  private getBookList() {
    this.bookService.getBookLsit().then((date: any) => {
      if (date === null) {
        console.dir('get book list faild  it is null');
      } else{
        this.novels = date;
      }
    });
  }
}
