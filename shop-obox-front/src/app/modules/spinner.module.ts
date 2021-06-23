import { SpinnerComponent } from 'src/app/layout/spinner/spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
  ],
  declarations: [
    SpinnerComponent
  ],
  bootstrap: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
