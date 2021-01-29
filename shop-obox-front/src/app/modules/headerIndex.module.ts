import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderIndexComponent } from '../layout/index/header/header.component';
import { TopbarComponent } from '../layout/topbar/topbar.component';
import { NavComponent } from '../layout/nav/nav.component';
import { ContentComponent } from '../layout/index/header/content/content.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    HeaderIndexComponent,
    TopbarComponent,
    NavComponent,
    ContentComponent
  ],
  bootstrap: [HeaderIndexComponent],
  exports: [HeaderIndexComponent]
})
export class HeaderIndexModule { }
