import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from 'src/authentication/authentication.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './modules/category/category.module';
import { HeaderComponent } from './modules/commons/component/header/header.component';
import { MenuComponent } from './modules/commons/component/menu/menu.component';
import { ProductModule } from './modules/product/product.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { OrdenModule } from './modules/orden/orden.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AuthenticationModule,
    CategoryModule,
    ProductModule,
    DashboardModule,
    OrdenModule,
    NgbModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
