import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

// import { AuthService } from '../../../account/shared/auth.service';

// import { User } from '../../../models/user.model';

@Component({
  selector: 'header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  // public user: User;
  private authSubscription: Subscription;

  constructor(
    // public authService: AuthService
    ) {}

  ngOnInit() {
    // this.authService.user.subscribe((user) => {
    //   this.user = user;
    // });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
