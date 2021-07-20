import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './view/category.component';



const routes: Routes = [
    { path: 'category', component: CategoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRouterModule {}
