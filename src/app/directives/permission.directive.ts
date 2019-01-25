import { Directive, Input, OnInit, ElementRef} from '@angular/core';
import { SharedService } from '../service/sharedService';

@Directive({
    selector: '[hasPermission]'
})
export class PermissionDirective implements OnInit {
    constructor(private sharedService: SharedService,private el: ElementRef) { }
    userDetails: any;
    @Input() hasPermission: String;

    ngOnInit(): void {
        this.sharedService.userDetails$.subscribe(userDetails => {
            this.userDetails = userDetails;
        });
        this.checkPermission();
    }
    checkPermission(){
        if(!(this.userDetails.role.trim().toLowerCase() === this.hasPermission.trim().toLowerCase())){
            this.el.nativeElement.style.display = "none";
        }
    }
}