import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OrdenRouterModule } from './orden.routing';
import { OrdenComponent } from './view/orden.component';
import { OrdenListComponent } from './component/list/list.orden.component';
import { SearchModule } from '../commons/search/search.module';
import { OrdenSingleComponent } from './component/ordenSingle/ordenSingle.component';
import { ModalComponent } from './component/modal/modal.component';
import { TableProductComponent } from './component/table/table-product.component';
import { StateComponent } from './component/state/state.component';

@NgModule({
    declarations: [
        OrdenComponent,
        OrdenListComponent,
        OrdenSingleComponent,
        ModalComponent,
        TableProductComponent,
        StateComponent,
    ],
    imports: [ 
        BrowserModule,
        CommonModule,
        FormsModule,
        OrdenRouterModule,
        SearchModule,
        NgbModule,
    ],
    exports: [
        OrdenComponent
    ],
    providers: [],
    bootstrap: [OrdenComponent]
})
export class OrdenModule {}