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
  types: any;
  bookmanage: string;
  novelishidden: boolean = true;
  textbookishidden: boolean = true;
  otherbookishidden: boolean = true;
  constructor(private bookService: BookmanageService,
              private router: Router,
              private routeInfo: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.initBook();
    this.ishiddenselect();
  }

  ishiddenselect(){
    if (this.parm === 'noveladd') {
      this.novelishidden = false;
    } else if( this.parm === 'textbookadd') {
      this.textbookishidden = false;
    } else {
      this.book.btype = 'outher'
    }
  }
    

  onchange(key: any){
    this.book.btype = this.types[key].vlaue;
    // this.book.bstype = 'novel';
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
    if(this.parm === 'noveladd') {
      this.book = new Book();
      this.book.bstype = 'novel';
console.log("add novel ...." + this.book.bstype);
      this.types = [
        {key: "0", vlaue: "modern"},
        {key: "1", vlaue: "classical"},
        {key: "2", vlaue: "detective"},
        {key: "4", vlaue: "gongfu"},
        {key: "5", vlaue: "science"},
        {key: "6", vlaue: "nother"},
      ];
    } else if (this.parm === 'textbookadd') { 
      this.book = new Book();
      this.book.bstype = 'textbook';
console.log("add textbook ...." + this.book.bstype);
      this.types = [
        {key: "0", vlaue: "financial"},
        {key: "1", vlaue: "advertising"},
        {key: "2", vlaue: "pubmanser"},
        {key: "4", vlaue: "businessadmin"},
        {key: "5", vlaue: "chinlanlite"},
        {key: "6", vlaue: "computer"},
        {key: "7", vlaue: "toumanagement"},
        {key: "8", vlaue: "laolanguange"},
        {key: "9", vlaue: "secrescien"},
        {key: "10", vlaue: "marketing"},
        {key: "11", vlaue: "humanresource"},
      ];
    } else if (this.parm === "otheradd") {
      this.book = new Book();
      this.book.bstype = 'other';
      this.bookmanage = "otherbookmanage";
     alert("添加其他书籍");
    } else {
      this.getBook();
    }
  }

  getrouter(){
    switch(this.parm){
      case 'noveladd':
      this.bookmanage = 'bookmanage'; break;
      case 'textbookadd':
      this.bookmanage = 'textbookmanage'; break;
      case 'otheradd':
      this.bookmanage = 'otherbookmanage'; break;
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
    this.getrouter();
    this.bookService.addBook(book).then((flage: boolean) => {
      if (!flage) {
        alert('添加失败！');
      } else {
        this.router.navigate(['/adminmanage/' + this.bookmanage]);
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
    this.book.bstar = null;
  }
}