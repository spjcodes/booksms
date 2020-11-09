import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/book';
import {AuthService} from './auth.service';

@Injectable()
export class BookmanageService {

  httpOptions: any;
  constructor(private config: ConfigserviceService,
              private http: HttpClient,
              private authService: AuthService
              ) {
    this.httpOptions = this.authService.renewHttpheaders();
    console.dir(this.httpOptions);
  }
  private addBookURL = this.config.hsot + '/addBook';
  addBook(book: Book) {
    let p = {
      'bid': book.bid,
      'bauthor': book.bauthor,
      'bintro': book.bintro,
      'bimage': book.bimage,
      'bversion': book.bversion,
      'bname': book.bname,
      'boldcost': book.boldcost,
      'bnewcost': book.bnewcost,
      'btype': book.btype,
      'bstype': book.bstype,
      'bstar': book.bstar
    }
    return this.http.post(this.addBookURL, p, this.httpOptions).toPromise();
  }

  private deleteBookURL = this.config.hsot + '/deleteBook';
  deleteBook(id: string){
    let p = {
      'bid': id
    }
    return this.http.post(this.deleteBookURL, p, this.httpOptions).toPromise();
  }

  private updateBookURL = this.config.hsot + '/updateBook';
  updateBook(id: string){
    let p = {
      'bid': id
    }
    return this.http.post(this.updateBookURL, p, this.httpOptions).toPromise();
  }

  private getBookURL = this.config.hostauth + '/getBook';
  getBook(id: string) {
    let p = {
      'bid': id
    }
    return this.http.post(this.getBookURL, p).toPromise();
  }

  private getBookListURL = this.config.hostauth + '/getBookList';
  getBookLsit() {
    return this.http.get(this.getBookListURL).toPromise();
  }

  private getBookListByTypeURL = this.config.hostauth + '/getBooksListByType';
  getBookListByType(type: string) {
 console.log(type)
    let p = {
      'btype': type
    };
    return this.http.post(this.getBookListByTypeURL, p ).toPromise();
  }

  private getBookListByBstypeURL = this.config.hostauth + '/getBookListByBstype';
  getBookListByBstype(Bstype: string) {
    return this.http.post(this.getBookListByBstypeURL, {'bstype': Bstype}).toPromise();
  }


  private  getSearchResultURL = this.config.gethost + '/getBooksBySolrEngine?keyWorld=';
  getSearchResult(paramet: string) {

    return this.http.post(this.getSearchResultURL + paramet, {}).toPromise();
  }
}
