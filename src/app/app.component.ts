import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    get isAdmin() {
      return this.user && this.user.role === Role.Admin;
    }
    get isBuyer() {
      return this.user && this.user.role === Role.Buyer;
    }
    get isFarmer() {
      return this.user && this.user.role === Role.Farmer;
    }

    get userName(){
      return this.user.firstName;
    }

    logout() {
        this.accountService.logout();
    }
}
