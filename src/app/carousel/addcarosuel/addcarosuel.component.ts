import { Component, OnInit } from '@angular/core';
import {CarouselmanageService} from '../../services/carouselmanage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Carousel} from '../../model/carousel';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-addcarosuel',
  templateUrl: './addcarosuel.component.html',
  styleUrls: ['./addcarosuel.component.css']
})
export class AddcarosuelComponent implements OnInit {
  carousel: Carousel;
  parm: string;
  config: any;
  private selectedFile: string;

  constructor(private carouservice: CarouselmanageService,
              private routerinfo: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
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

  onchange(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    // upload code goes here

    const uploadData = new FormData();
    uploadData.append('uploadfile', this.selectedFile);
    this.http.post('http://localhost/manage/uploadPic', uploadData).subscribe(
      (data: any) => {
        // alert(data);
        console.log(JSON.stringify(data));
      }, (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
