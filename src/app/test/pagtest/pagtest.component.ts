import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-pagtest',
  templateUrl: './pagtest.component.html',
  styleUrls: ['./pagtest.component.css']
})
export class PagtestComponent implements OnInit {
  payInfo: any;

  constructor(private parSer: TestService,) { }

  ngOnInit() {

      this.parSer.getPayTest().then((data: any) => {
        this.payInfo = data;
      });

      console.log('***************************pay test ************************');
  }

}
