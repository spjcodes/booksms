import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-adminmanage',
  templateUrl: './adminmanage.component.html',
  styleUrls: ['./adminmanage.component.css']
})
export class AdminmanageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['adminmanage/carouselmanage']);
  }

}
