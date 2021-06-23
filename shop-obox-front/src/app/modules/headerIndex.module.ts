import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderIndexComponent } from '../layout/index/header/header.component';
import { TopbarComponent } from '../layout/topbar/topbar.component';
import { ContentComponent } from '../layout/index/header/content/content.component';
import { NavModule } from './nav.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    NavModule
  ],
  declarations: [
    HeaderIndexComponent,
    TopbarComponent,
    ContentComponent
  ],
  bootstrap: [HeaderIndexComponent],
  exports: [HeaderIndexComponent]
})
export class HeaderIndexModule { }
