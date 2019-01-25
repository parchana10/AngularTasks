import { Component, OnInit, Input } from '@angular/core';
import { APPCONSTANT } from '../../properties/config'


@Component({
  selector: 'leftNavigation',
  templateUrl: './leftNavigation.component.html',
  styleUrls: ['./leftNavigation.component.scss']
})

export class LeftNavigationComponent implements OnInit {

  @Input() userDetails: any;
  leftNavData = [];
  constructor() {

  }

  ngOnInit() {
    this.initializeLeftNavData();
  }
  initializeLeftNavData() {
    this.userDetails.permissions.forEach(userDetail => {
      APPCONSTANT.permission.map(obj => {
        if (obj.id === userDetail) {
          this.leftNavData.push(obj);
        }
      })
    });
  }

}