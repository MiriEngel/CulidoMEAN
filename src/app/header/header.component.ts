import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'header',
    templateUrl: 'header.template.html',
    providers:[AuthenticationService]
})
export class HeaderComponent {

    user:any;
    constructor(private _authenticationService: AuthenticationService) { 
        	this.user = _authenticationService.user;
    }
    ngOnInit() {

    }


}