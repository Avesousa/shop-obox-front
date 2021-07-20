import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModelComponent } from './component/main/product.main.component';
import { ProductFormComponent } from './component/form/product.form.component';
import { ProductComponent } from './view/product.component';
import { ProductRouterModule } from './product.routing';
import { ProductListComponent } from './component/list/list.product.component';
import { FormsModule } from '@angular/forms';
import { SearchModule } from '../commons/search/search.module';

@NgModule({
    imports: [ 
        BrowserModule,
        CommonModule,
        FormsModule,
        ProductRouterModule,
        SearchModule,
    ],
    declarations: [
        ProductModelComponent,
        ProductFormComponent,
        ProductComponent,
        ProductListComponent,
    ],
    exports: [
        ProductComponent
    ],
    providers: [],
})
export class ProductModule {}