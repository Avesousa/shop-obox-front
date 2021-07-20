import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryModelComponent } from './component/main/category.main.component';
import { CategoryFormComponent } from './component/form/category.form.component';
import { CategoryComponent } from './view/category.component';
import { CategoryRouterModule } from './category.routing';
import { CategoryListComponent } from './component/list/list.category.component';
import { FormsModule } from '@angular/forms';
import { SearchModule } from '../commons/search/search.module';

@NgModule({
    imports: [ 
        BrowserModule,
        CommonModule,
        FormsModule,
        CategoryRouterModule,
        SearchModule
    ],
    declarations: [
        CategoryModelComponent,
        CategoryFormComponent,
        CategoryComponent,
        CategoryListComponent
    ],
    exports: [
        CategoryComponent
    ],
    providers: [],
})
export class CategoryModule {}