import { PageCartComponent } from './../pages/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductService } from 'src/app/product/shared/service/product.service';
import { HeaderModule } from './header.module';
import { PageProductsComponent } from '../pages/products/products.component';
import { FooterModule } from './footer.module';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from '../product/shared/component/product/product.module';
import { ProductLocalStorageService } from '../product/shared/service/product-ls.service';
import { SpinnerModule } from './spinner.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    ProductModule,
    HeaderModule,
    FooterModule,
    SpinnerModule
  ],
  declarations: [
    PageProductsComponent,
    ProductListComponent
  ],
  providers: [ProductService, ProductLocalStorageService],
  bootstrap: [PageProductsComponent],
  exports: [PageProductsComponent]
})
export class PageProductModule { }
