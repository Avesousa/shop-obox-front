import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexModule } from '../app/modules/index.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './router/main.routing';
import { SpinnerComponent } from './layout/spinner/spinner.component';
import { PageProductModule } from './modules/product-list,module';
import { ProductModule } from './product/shared/component/product/product.module';

@NgModule({
  declarations: [AppComponent,SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    RouterModule,
    IndexModule,
    PageProductModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
