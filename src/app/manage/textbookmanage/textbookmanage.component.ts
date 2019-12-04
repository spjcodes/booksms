import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { Router } from '@angular/router';
import { BookmanageService } from '../../services/bookmanage.service';

@Component({
  selector: 'app-textbookmanage',
  templateUrl: './textbookmanage.component.html',
  styleUrls: ['./textbookmanage.component.css']
})
export class TextbookmanageComponent implements OnInit {
  novel: Book;
  novels: Array<Book>;

  constructor(private router: Router,
              private  bookService: BookmanageService,
              ) { }

  ngOnInit() {
    this.getBookList();
  }

  add() {
    this.router.navigate(['addbook', 'textbookadd']);
  }

  update(bid: string) {
    this.router.navigate(['addbook', bid]);
  }

  detail(bid: string) {
    this.router.navigate(['bookinfo', bid]);
  }

  delete(bid: string) {
    this.bookService.deleteBook(bid).then((flage: any) => {
      if (flage) {
        this.getBookList();
      } else {
        alert('删除失败！');
      }
    });
  }



  private getBookList() {
    this.bookService.getBookListByBstype('textbook').then((date: any) => {
      if (date === null) {
        console.dir('get book list faild  it is null');
      } else{
        this.novels = date;
      }
    });
  }
}
