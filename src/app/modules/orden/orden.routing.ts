import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrdenComponent } from './view/orden.component';

const routes: Routes = [{ path: 'orden', component: OrdenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenRouterModule {}
