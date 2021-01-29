import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "../layout/index/index.component";
import { PageProductsComponent } from "../pages/products/products.component";

const mainRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: IndexComponent,
        pathMatch: 'full'
    },
    {
        path: 'product-list',
        component: PageProductsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(mainRoutes, { scrollPositionRestoration: 'enabled', useHash: true })],
    exports: [RouterModule],
  })
  export class MainRoutingModule {}