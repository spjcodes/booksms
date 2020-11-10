import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  keyWorld: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  // this.keyWorld = '1111';

  }


  goToPage(address: string) {
    this.router.navigate(['novelbooks', address]);


  }

  gotoSearch(keyWorld: string) {
    // const wd = document.getElementById('kwd');
    // const keyword = wd.nodeValue;
    // alert(keyWorld);
    this.router.navigate(['searchResult', keyWorld]);
  }

  gotoOrders() {

    const uid = localStorage.getItem('userId');
    if (uid == null) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['ordermanage', uid]);
    }
  }
}
