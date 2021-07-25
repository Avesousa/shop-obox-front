import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStandComponent } from './productStand.component';
import { ProductService } from 'src/app/product/shared/service/product.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from '../alert/alert.module';

@NgModule({
    declarations: [
        ProductStandComponent
    ],
    imports: [ 
        CommonModule,
        FontAwesomeModule,
        AlertModule,
    ],
    exports: [ 
        ProductStandComponent
    ],
    providers: [ProductService],
})
export class ProductStandModule {}