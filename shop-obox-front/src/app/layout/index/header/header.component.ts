import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ClientService } from '../../../account/shared/service/client.service';

import { CanvasService } from '../../shared/canvas.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'index-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderIndexComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription;
  public user: User;
  public showSearch;

  constructor(
    private clientService: ClientService,
    // private router: Router,
    private canvasService: CanvasService
  ) {}

  ngOnInit() {
    // this.authSubscription = this.clientService.user.subscribe((user) => {
    //   this.user = user;
    // });
  }

  public onLogOut(e: Event) {
    // this.clientService.signOut();
    // this.router.navigate(['/register-login']);
    // e.preventDefault();
  }

  public onMenuToggle(e: Event) {
    this.canvasService.openOffcanvasNavigation();
    e.preventDefault();
  }

  ngOnDestroy() {
    // this.authSubscription.unsubscribe();
  }
}
