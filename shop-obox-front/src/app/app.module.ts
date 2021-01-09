import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './account/orders/orders.component';
import { ProfileComponent } from './account/profile/profile.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductRelatedComponent } from './product/product-related/product-related.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/shared/component/product/product.component';
import { ProductFeaturedComponent } from './product/product-featured/product-featured.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryFeaturedComponent } from './category/category-featured/category-featured.component';
import { CategoryComponent } from './category/shared/component/category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './layout/index/header/header.component';
import { NavComponent } from './layout/index/header/nav/nav.component';
import { ToolbarCartComponent } from './layout/index/header/toolbar-cart/toolbar-cart.component';
import { ContentComponent } from './layout/index/header/content/content.component';
import { IndexComponent } from './layout/index/index.component';
import { ContentIndexComponent } from './layout/index/content-index/content-index.component';
import { ProductIndexComponent } from './layout/index/product-index/product-index.component';
import { SubscriptionComponent } from './layout/subscription/subscription.component';
import { FooterIndexComponent } from './layout/index/footer-index/footer-index.component';
import { CopyFooterComponent } from './layout/index/footer-index/copy-footer/copy-footer.component';
import { BrandComponent } from './layout/index/footer-index/brand/brand.component';
import { CarouselModule } from 'primeng/carousel';
import { ProductService } from './product/shared/service/product.service';
// import {DataViewModule} from 'primeng/dataview';
// import {ButtonModule} from 'primeng/button';
// import {PanelModule} from 'primeng/panel';
// import {DropdownModule} from 'primeng/dropdown';
// import {DialogModule} from 'primeng/dialog';
// import {InputTextModule} from 'primeng/inputtext';
// import {RatingModule} from 'primeng/rating';
// import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    OrdersComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    TopbarComponent,
    ProductDetailComponent,
    ProductRelatedComponent,
    ProductListComponent,
    ProductComponent,
    ProductFeaturedComponent,
    CategoryListComponent,
    CategoryFeaturedComponent,
    CategoryComponent,
    NavComponent,
    ToolbarCartComponent,
    ContentComponent,
    IndexComponent,
    ContentIndexComponent,
    ProductIndexComponent,
    SubscriptionComponent,
    FooterIndexComponent,
    CopyFooterComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    CarouselModule,
    // ButtonModule,
    FormsModule,
    HttpClientModule,
    // DataViewModule,
    // RatingModule,
    // PanelModule,
    // InputTextModule,
    // // DropdownModule,
    // // DialogModule,
    // RippleModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
