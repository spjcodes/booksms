import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {BookmanageService} from '../../services/bookmanage.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bookList: Array<Book>;

  constructor(private router: Router, private bookSer: BookmanageService, private routerInfo: ActivatedRoute) {

    this.router.events.subscribe((event: any) => {
      if (event instanceof  NavigationEnd) {
        // console.log(event);
        this.initBookList();
      }
    });
  }
  paramet: string;

  ngOnInit() {
    // this.initBookList();
  }
  toBookDetail(bid: string) {
    this.router.navigate(['bookdetail', bid]);
  }

  private initBookList() {
    this.routerInfo.params.subscribe((params: Params) => this.paramet = params['id']);
    // this.paramet = this.routerInfo.snapshot.params['id'];
    this.bookSer.getSearchResult( this.paramet).then((data: any) => {
      if (data == null) {

      } else {
        this.bookList = new Array<Book>();
        this.bookList = data;
      }
    });
  }
}
