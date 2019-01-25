import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
/**
 * class SharedUserDetailsService
 * This class provides service to components for getting details of currently logged in user.
 */

export class SharedService {
    // Observable string sources
    private userDetailsSource = new BehaviorSubject<any>(0);

    // Observable string streams
    userDetails$ = this.userDetailsSource.asObservable();

    // Share details of currently logged in user with other components
    public setUserDetails(userDetails: any) {
        this.userDetailsSource.next(userDetails);
    }

}