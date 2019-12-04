import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(private authservice: AuthService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve) => {

      this.authservice.getRole()
        .then((user: any) => {
            if (user.role === 'admin') {
            resolve(true);
          } else {
            this.router.navigate(['login']);
            resolve(false);
          }

        })
        .catch(err => {
          this.router.navigate(['login']);
          resolve(false);
        });
    });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve) => {
      this.authservice.getRole()
        .then((user: any) => {
          console.dir(user);
          if (user.role === 'admin') {
            resolve(true);
          } else {
            // this.router.navigate(["login"]);
            resolve(false);
          }
        })
        .catch(err => {
          //  this.router.navigate(["login"]);
          resolve(false);
        });
    });
  }

}
