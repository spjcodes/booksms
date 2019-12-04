import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class PicturemanageService {
  private httpOptions: any;

  constructor(private config: ConfigserviceService,
              private http: HttpClient,
              private authService: AuthService,
              ) {
    this.httpOptions = this.authService.renewHttpheaders();
  }

  private uploadpictureURL = this.config.hsot + '/uploadPic';
  onUpload(selectedFile: any) {
    console.log('addd pic 190421' + localStorage.getItem('tokn'))
    const uploadData = new FormData();
    uploadData.append('uploadfile', selectedFile);
    this.http.post(this.uploadpictureURL, uploadData, this.httpOptions).subscribe(
      (data: any) => {
        // alert(data);
        console.log(JSON.stringify(data));
      }, (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
