import { Component, OnInit } from '@angular/core';
import { SharedService } from './service/sharedService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RBAC-POC';
  userDetails: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.userDetails$.subscribe(userDetails => {
      this.userDetails = userDetails;
    });

  }
}
