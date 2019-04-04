import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookmanageService} from '../../services/bookmanage.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  parm: string;
  book: Book;
  books: Array<Book>;
  constructor(private bookService: BookmanageService,
              private router: Router,
              private routeInfo: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.initBook();
  }

  add(book: Book) {
    this.bookService.addBook(book).then((flage: boolean) => {
      if (flage) {
        this.router.navigate(['']);
      } else {
        alert('添加失败！');
      }
    });
  }

  private initBook() {
    this.parm = this.routeInfo.snapshot.params['id'];
    if(this.parm === 'add') {
      this.book = new Book();
    } else {
      this.getBook();
    }
  }

  private getBook() {
    this.bookService.getBook(this.parm).then((date: any) => {
      if (date == null) {
        console.log('获取单个book 失败！');
      } else {
        this.book = date;
      }
    });
  }


  save(book: Book) {
    this.bookService.addBook(book).then((flage: boolean) => {
      if (!flage) {
        alert('添加失败！');
      } else {
        this.router.navigate(['/adminmanage/bookmanage']);
      }
    });
  }

  reset() {
    this.book.bintro = null;
    this.book.bversion = null;
    this.book.btype = null;
    this.book.bname = null;
    this.book.bnewcost = null;
    this.book.boldcost = null;
    this.book.bnewcost = null;
    this.book.bauthor = null;
    this.book.bimage = null;
  }
}
