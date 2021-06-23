import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product.component';
import { ProductService } from '../../service/product.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
        FontAwesomeModule
    ],
    declarations: [
        ProductComponent
    ],
    bootstrap: [ProductComponent],
    exports: [ProductComponent],
    providers: [ProductService]
})
export class ProductModule { }
