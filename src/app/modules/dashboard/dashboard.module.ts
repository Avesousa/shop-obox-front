import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './view/dashboard.component';
import { DashboardRouterModule } from './dashboard.routing';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [ 
        BrowserModule,
        CommonModule,
        DashboardRouterModule
    ],
    exports: [
        DashboardComponent
    ],
    providers: [],
})
export class DashboardModule {}