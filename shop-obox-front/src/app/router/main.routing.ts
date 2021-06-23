import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "../layout/index/index.component";
import { PageCartComponent } from "../pages/cart/cart.component";
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
    path: 'products/:type',
    component: PageProductsComponent
  },
  {
    path: 'products/:type/:value/:title',
    component: PageProductsComponent
  },
  {
    path: 'products/:type/:value',
    component: PageProductsComponent
  },
  {
    path: 'checkout',
    component: PageCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: "enabled" })],
  exports: [RouterModule],
})
export class MainRoutingModule { }
