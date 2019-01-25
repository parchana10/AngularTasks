import { Injectable } from '@angular/core';
import { SharedService } from '../service/sharedService';

@Injectable()
export class AuthService {

  constructor(private sharedService: SharedService) { }
  userDetails: any;

  public isAuthenticated(roles: Array<string>): boolean {
    this.sharedService.userDetails$.subscribe(userDetails => {
      this.userDetails = userDetails;
    });
    for (let role of roles) {
      if (this.userDetails.role.trim().toLowerCase() === role.trim().toLowerCase()) {
        return true
      }
    }
    return false;
  }


}