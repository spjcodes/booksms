import { Component, OnInit } from '@angular/core';
import {HotrecommendService} from '../../services/hotrecommend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hotrecommend} from '../../model/hotrecommend';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-addhotrecommend',
  templateUrl: './addhotrecommend.component.html',
  styleUrls: ['./addhotrecommend.component.css']
})
export class AddhotrecommendComponent implements OnInit {

  parm: string;
  hotrecommend: Hotrecommend;
  private selectedFile: string;
  private url: string;

  constructor(private hotservice: HotrecommendService,
              private router: Router,
              private routerinfo: ActivatedRoute,
              private http: HttpClient,
  ) {
  }

  ngOnInit() {
    this.parm = this.routerinfo.snapshot.params['id'];
    if (this.parm === 'add') {
      this.hotrecommend = new Hotrecommend();
    } else {
      this.getSingleHotrecommend(this.parm);
    }
  }

  save(value: any) {
    console.dir(value);
    if (this.parm === 'add') {
      this.hotservice.addHotrecomment(value).then((flage: boolean) => {
        if (flage) {
          this.router.navigate(['adminmanage/hotrecom']);
        } else {
          alert('添加失败！');
        }
      });
    } else {
      this.hotservice.updateHotrecommend(value).then((flage: boolean) => {
        if (flage) {
          this.router.navigate(['adminmanage/hotrecom']);
        } else {
          alert('添加失败！');
        }
      });
    }

  }

  private getSingleHotrecommend(hid: string) {
    this.hotservice.getHotrecommend(hid).then((hotre: any) => {
      this.hotrecommend = hotre;
    });
  }


  reset() {
    this.hotrecommend.hstar = undefined;
    this.hotrecommend.hname = undefined;
    this.hotrecommend.hintro = undefined;
    this.hotrecommend.himage = undefined;
  }



  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('uploadfile', this.selectedFile);
    this.http.post('http://localhost:8081/manage/uploadPic', uploadData).subscribe(
      (data: any) => {
        if ( data != null) {
          this.url = 'http://localhost:8081/';
          this.hotrecommend.himage = this.url + data.cimg;
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
