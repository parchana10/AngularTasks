import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SharedService } from './sharedService';
/**
 * Start up service to call get role/permision API of the logged in user
 */

@Injectable()
export class StartupService {

    private _startupData: any;

    constructor(private http: Http, private sharedService: SharedService) { }

    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    load(): Promise<any> {
        this._startupData = null;
        return this.http
            // .get('http://www.mocky.io/v2/5c497f5e3200004b000b5879') // API to get Admin's permisions
            .get('http://www.mocky.io/v2/5c4983763200000d310b588f') // API to get User's permisions
            .map((res: Response) => res.json())
            .toPromise()
            .then((data: any) => {
                this._startupData = data; 
                this.sharedService.setUserDetails(data);
            })
            .catch ((err: any) => Promise.resolve());
    }
    get startupData(): any {
        return this._startupData;
    }
}
