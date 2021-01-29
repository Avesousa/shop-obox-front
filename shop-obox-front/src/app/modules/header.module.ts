import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../layout/header/header.component';
import { NavMainComponent } from '../layout/header/nav-main/nav-main.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    NavMainComponent
  ],
  bootstrap: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
