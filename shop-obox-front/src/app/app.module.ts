import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { NavComponent } from './layout/nav/nav.component';
import { ToolbarCartComponent } from './layout/index/header/toolbar-cart/toolbar-cart.component';
import { ContentComponent } from './layout/index/header/content/content.component';
import { IndexComponent } from './layout/index/index.component';
import { ContentIndexComponent } from './layout/index/content-index/content-index.component';
import { ProductIndexComponent } from './layout/index/product-index/product-index.component';
import { SubscriptionComponent } from './layout/subscription/subscription.component';
import { CarouselModule } from 'primeng/carousel';
import { ProductService } from './product/shared/service/product.service';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './router/main.routing';
import { BrandComponent } from './layout/footer/brand/brand.component';
import { CopyFooterComponent } from './layout/footer/copy-footer/copy-footer.component';
import { PageProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderIndexComponent } from './layout/index/header/header.component';
import { NavMainComponent } from './layout/header/nav-main/nav-main.component';
import { SpinnerComponent } from './layout/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    OrdersComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
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
    FooterComponent,
    CopyFooterComponent,
    BrandComponent,
    PageProductsComponent,
    HeaderComponent,
    HeaderIndexComponent,
    NavMainComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    CarouselModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    // RatingModule,
    // PanelModule,
    // InputTextModule,
    // // DropdownModule,
    // // DialogModule,
    RippleModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
