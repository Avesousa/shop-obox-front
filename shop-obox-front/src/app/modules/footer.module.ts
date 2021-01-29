import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from 'src/app/layout/index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { RippleModule } from 'primeng/ripple';
import { BrandService } from '../services/brand.service';
import { FooterComponent } from '../layout/footer/footer.component';
import { BrandComponent } from '../layout/footer/brand/brand.component';
import { CopyFooterComponent } from '../layout/footer/copy-footer/copy-footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    ButtonModule,
    HttpClientModule,
    RippleModule
  ],
  declarations: [
    FooterComponent,
    BrandComponent,
    CopyFooterComponent
  ],
  providers: [BrandService],
  bootstrap: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
