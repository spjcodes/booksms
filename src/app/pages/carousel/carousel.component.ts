import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {CarouselmanageService} from '../../services/carouselmanage.service';
import {Carousel} from '../../model/carousel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/1120/560?random&t=${Math.random()}`);
  carousels: Array<Carousel>;
  carousel: Carousel;
  src: string;
  constructor(private config: NgbCarouselConfig,
              private carouselService: CarouselmanageService,
              private router: Router,) {
    config.interval = 3800;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
}

  ngOnInit() {
    this.src = '/root/projects/booksms/pics/';
    // this.src = 'd:/booksmsFiles/';
    this.carouselService.getCarosuelList().then((data: any) => {
      this.carousels = data;
      console.dir(data);
    });

  }

  toDetail(cid: string, type: string) {
    type = 'carousel';
    this.router.navigate(['/carouseldetail', cid, type]);
  }
}
