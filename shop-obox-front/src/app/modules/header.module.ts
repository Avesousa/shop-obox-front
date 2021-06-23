import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../layout/header/header.component';
import { NavModule } from './nav.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NavModule
  ],
  declarations: [
    HeaderComponent
  ],
  bootstrap: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
