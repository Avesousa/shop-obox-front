import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexModule } from '../app/modules/index.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './router/main.routing';
import { PageProductModule } from './modules/product-list.module';
import { NavModule } from './modules/nav.module';
import { PageCartModule } from './modules/pageCart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    RouterModule,
    NavModule,
    IndexModule,
    PageProductModule,
    PageCartModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
