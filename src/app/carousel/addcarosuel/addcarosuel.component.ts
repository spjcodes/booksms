import { Component, OnInit } from '@angular/core';
import {CarouselmanageService} from '../../services/carouselmanage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Carousel} from '../../model/carousel';

@Component({
  selector: 'app-addcarosuel',
  templateUrl: './addcarosuel.component.html',
  styleUrls: ['./addcarosuel.component.css']
})
export class AddcarosuelComponent implements OnInit {
  carousel: Carousel;
  parm: string;
  config: any;

  constructor(private carouservice: CarouselmanageService,
              private routerinfo: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    this.parm = this.routerinfo.snapshot.params['id'];
    this.initCarosuel();
  }

  reset() {
    this.carousel.cintro = null;
    this.carousel.ccontent = null;
    this.carousel.cname = null;
  }

  save(c: Carousel) {
    if (this.parm === 'add') {
      this.carouservice.addCarousel(c).then((flage: boolean) => {
        if (!flage) {
          alert('添加失败！');
        } else {
          this.router.navigate(['adminmanage/carouselmanage']);
        }
      });
    } else {
        this.carouservice.updateCarosuel(c).then((flage: boolean) => {
          if (!flage) {
            alert('修改失败！');
          } else {
            this.router.navigate(['adminmanage/carouselmanage']);
          }
        });
      }

  }

  initCarosuel() {
    if (this.parm === 'add') {
      this.carousel = new Carousel();
    } else {
      this.getCarouse(this.parm);
    }
  }

  getCarouse(parm: string) {
    this.carouservice.getCarosuel(parm).then((c: Carousel) => {
      console.dir(c);
      this.carousel = c;
    });
  }
}
