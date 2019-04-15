import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookmanageService } from '../../services/bookmanage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otherbookmanage',
  templateUrl: './otherbookmanage.component.html',
  styleUrls: ['./otherbookmanage.component.css']
})
export class OtherbookmanageComponent implements OnInit {
  
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
    this.bookService.deleteBook(bid).then((flage: boolean) => {
      if (flage) {
        this.getBookList();
      } else {
        alert('删除失败！');
      }
    });
  }



  private getBookList() {
    this.bookService.getBookListByBstype('other').then((date: any) => {
      if (date === null) {
        console.dir('get book list faild  it is null');
      } else{
        this.novels = date;
      }
    });
  }
}
