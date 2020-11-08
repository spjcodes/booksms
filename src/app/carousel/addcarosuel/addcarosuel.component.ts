import { Component, OnInit } from '@angular/core';
import {CarouselmanageService} from '../../services/carouselmanage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Carousel} from '../../model/carousel';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {PicturemanageService} from '../../services/picturemanage.service';

@Component({
  selector: 'app-addcarosuel',
  templateUrl: './addcarosuel.component.html',
  styleUrls: ['./addcarosuel.component.css']
})
export class AddcarosuelComponent implements OnInit {
  carousel: Carousel;
  parm: string;
  config: any;
  private url: string;
  private selectedFile: string;

  constructor(private carouservice: CarouselmanageService,
              private routerinfo: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private pictureService: PicturemanageService,
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
      this.carouservice.addCarousel(c).then((flage: any) => {
console.dir(c);
        if (!flage) {
          alert('添加失败！');
        } else {
          this.router.navigate(['adminmanage/carouselmanage']);
        }
      });
    } else {
        this.carouservice.updateCarosuel(c).then((flage: any) => {
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


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('uploadfile', this.selectedFile);
    this.http.post('http://www.jiayeli.cn:8081/public/uploadPic', uploadData).subscribe(
      (data: any) => {
        if ( data != null) {
          this.url = 'http://www.jiayeli.cn:8081/pic/';
          this.carousel.cimg = this.url + data.cimg;
          console.dir(JSON.stringify(data));
        } else {
          alert('文件上传失败！');
        }
      }, (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
