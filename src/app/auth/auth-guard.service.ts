import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

/*
* Auth guard service to check if the user routed to authorized route or not
*/
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //Passed autherized roles with canActivate from app-routing.module
    let roles = route.data["roles"] as Array<string>;
    if (!this.auth.isAuthenticated(roles)) {
      this.router.navigate(['unauthorized']);
      return false;
    }
    return true;
  }

}