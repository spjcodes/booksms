import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Carousel} from '../model/carousel';
import {AuthService} from './auth.service';

@Injectable()
export class CarouselmanageService {
  constructor(private config: ConfigserviceService,
              private http: HttpClient,
              private author: AuthService) {  }
  private  httpOptions = this.author.renewHttpheaders();
  private getCarouselURL = this.config.hostauth + '/getCarousel';
  getCarousel(id: string) {
    let p = {
      'id': id,
    };
      return this.http.post(this.getCarouselURL, p).toPromise();
  }
  private addCarouselURl = this.config.hsot + '/addCarousel';
  addCarousel(carosuel: Carousel) {
    let p = {
      'cid': carosuel.cid,
      'cname': carosuel.cname,
      'cintro': carosuel.cintro,
      'ccontent': carosuel.ccontent,
      'cimg': carosuel.cimg
    };
    return this.http.post(this.addCarouselURl, p).toPromise();
  }

  private deleteCarouselURL = this.config.hsot + '/deleteCarousel';
  deleteCarosuel(id: string) {
    let p = {
      'cid': id
    };
    return this.http.post(this.deleteCarouselURL, p).toPromise();
  }

  private updateCarouselURL = this.config.hsot + '/updateCarouel';
  updateCarosuel(c: Carousel){
    let p = {
      'cid': c.cid,
      'cname': c.cname,
      'cintro': c.cintro,
      'ccontent': c.ccontent,
      'cimg': c.cimg
    };
    return this.http.post(this.updateCarouselURL, p, this.httpOptions).toPromise();
  }

  private getCarouselListURL = this.config.hostauth + '/getCarouselList';

  getCarosuelList() {
    return this.http.get(this.getCarouselListURL, ).toPromise();
  }

  private getCarouselUTL = this.config.hostauth + '/getCarousel';
  getCarosuel(parm: string) {
    let p = {
      'cid': parm
    };
    return this.http.post(this.getCarouselURL, p).toPromise();
  }
}
