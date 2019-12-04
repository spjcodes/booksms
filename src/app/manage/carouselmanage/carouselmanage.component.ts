import { Component, OnInit } from '@angular/core';
import {CarouselmanageService} from '../../services/carouselmanage.service';
import {Carousel} from '../../model/carousel';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-carouselmanage',
  templateUrl: './carouselmanage.component.html',
  styleUrls: ['./carouselmanage.component.css']
})
export class CarouselmanageComponent implements OnInit {

  carosuel: Carousel;
  carousels: Array<Carousel>;
  constructor(private caroervice: CarouselmanageService,
              private router: Router,
              ) { }

  ngOnInit() {
      this.getCarouelList();
  }

  getCarouelList() {
    this.caroervice.getCarosuelList().then((cl: any) => {
      console.dir(cl);
      this.carousels = cl;
    });
  }

  update(c: Carousel) {
   this.router.navigate(['addcarousel', c.cid]);
  }

  delete(id: string) {
    this.caroervice.deleteCarosuel(id).then((flage: any) => {
      if (!flage) {
        alert ('删除失败！');
      }
      this.getCarouelList();
    });
  }


  add() {
    this.router.navigate(['addcarousel', 'add']);
  }

  detail(cid: string) {
    this.router.navigate(['detailcarousel', cid]);
  }
}
