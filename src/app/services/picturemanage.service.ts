import { Injectable } from '@angular/core';
import {ConfigserviceService} from './configservice.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class PicturemanageService {

  constructor(private config: ConfigserviceService,
              private http: HttpClient,
              ) { }

  private uploadpictureURL = this.config.hsot + '/uploadPic';
  onUpload(selectedFile: any) {
    const uploadData = new FormData();
    uploadData.append('uploadfile', selectedFile);
    this.http.post(this.uploadpictureURL, uploadData).subscribe(
      (data: any) => {
        // alert(data);
        console.log(JSON.stringify(data));
      }, (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  selectedFile: string;
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

}
