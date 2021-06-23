import { PageCartComponent } from '../pages/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './header.module';
import { FooterModule } from './footer.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from '../product/shared/component/product/product.module';
import { ProductLocalStorageService } from '../product/shared/service/product-ls.service';
import { SpinnerModule } from './spinner.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    ProductModule,
    HeaderModule,
    FooterModule,
    SpinnerModule
  ],
  declarations: [
    PageCartComponent
  ],
  providers: [ProductLocalStorageService],
  bootstrap: [PageCartComponent],
  exports: [PageCartComponent]
})
export class PageCartModule { }
