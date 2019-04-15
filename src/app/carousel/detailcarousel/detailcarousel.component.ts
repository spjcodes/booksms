import { Component, OnInit } from '@angular/core';
import {Carousel} from '../../model/carousel';
import {ActivatedRoute, Router} from '@angular/router';
import {CarouselmanageService} from '../../services/carouselmanage.service';

@Component({
  selector: 'app-detailcarousel',
  templateUrl: './detailcarousel.component.html',
  styleUrls: ['./detailcarousel.component.css']
})
export class DetailcarouselComponent implements OnInit {
  carousel: Carousel;
  param: string;

  constructor(private router: Router,
              private routerInfo: ActivatedRoute,
              private carouselService: CarouselmanageService,
              ) { }

  ngOnInit() {
    this.getCarousel();
  }

  private getCarousel() {
    this.param = this.routerInfo.snapshot.params['id'];
    this.carouselService.getCarosuel(this.param).then((data: any) => {
      if (data != null) {
        this.carousel = data;
      } else {
        alert('获取信息失败！');
      }
    });
  }

  goback() {
    this.router.navigate(['./adminmanage/carouselmanage']);
  }
}
