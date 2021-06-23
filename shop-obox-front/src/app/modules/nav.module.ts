import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from '../layout/nav/nav.component';
import { CartComponent } from '../layout/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
  ],
  declarations: [
    NavComponent,
    CartComponent
  ],
  bootstrap: [NavComponent],
  exports: [NavComponent]
})
export class NavModule { }
