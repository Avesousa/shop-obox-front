import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from 'src/app/layout/index/index.component';
import { ContentIndexComponent } from 'src/app/layout/index/content-index/content-index.component';
import { ProductIndexComponent } from 'src/app/layout/index/product-index/product-index.component';
import { SubscriptionComponent } from 'src/app/layout/subscription/subscription.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RippleModule } from 'primeng/ripple';
import { ProductService } from 'src/app/product/shared/service/product.service';
import { FooterModule } from 'src/app/modules/footer.module';
import { HeaderIndexModule } from './headerIndex.module';
import { ProductFeaturedComponent } from '../product/product-featured/product-featured.component';
import { ProductModule } from '../product/shared/component/product/product.module';
import { AlertModule } from '../layout/alert/alert.module';
import { SubscriptionService } from '../services/subscription.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    RippleModule,
    ProductModule,
    FooterModule,
    HeaderIndexModule,
    AlertModule
  ],
  declarations: [
    IndexComponent,
    ContentIndexComponent,
    ProductFeaturedComponent,
    ProductIndexComponent,
    SubscriptionComponent,
  ],
  providers: [ProductService,SubscriptionService],
  bootstrap: [IndexComponent],
  exports: [IndexComponent]
})
export class IndexModule { }
