import { Component, Input, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/services/orden.service';
import { ProductService } from 'src/app/services/product.service';
import { Orden } from '../../model/orden.interface';
import { OrdenModel } from '../../model/orden.model';
import { ordenState } from '../../model/ordenState.enum';
import { Product } from '../../model/product.interface';
import { productState } from '../../model/productState.enum';
import { State } from '../state/state.model';
import { StyleState } from '../state/styleState.model';

@Component({
    selector: 'table-product',
    templateUrl: './table-product.component.html',
    styleUrls: ['./table-product.style.scss', '../../orden.style.scss']
})
export class TableProductComponent implements OnInit {
    constructor(public productService: ProductService, private ordenService: OrdenService) { }

    @Input() public orden: Orden = new OrdenModel();
    public products: Product[] = [];
    public states: State[] = [
        {label: 'Pendiente', state: productState.unaggregated, style: StyleState.NEW},
        {label: 'Agregado', state: productState.aggregate, style: StyleState.FINISH},
        {label: 'Rechazado', state: productState.reject, style: StyleState.REJECT}
    ];
    public productState: any = productState;
    public ordenState: any = ordenState;
    public isFinish: boolean = false;

    ngOnInit(): void {
        this.products = this.orden.products;
        this.isFinish = this.isFinished();
     }

    onRightClick($event: any, id: number): void {
        $event.preventDefault();
        if(this.orden.state != ordenState.send){
            this.closeAllMenu();
            document.querySelector(`#menu-option-${id}`)?.classList.add("menuShow");
        }else{
            $event.stopPropagation();
        }
    }

    closeAllMenu(){
        document.querySelectorAll(`.menu-option`).forEach( menu => {
            menu.classList.remove("menuShow");
        });
    }

    //Function of menu toggle
    add(product: Product){
        let isProductReject = product.state == productState.reject;
        this.ordenService.updateProductState(product.ordenId ? product.ordenId : null, productState.aggregate).subscribe(() => {
            product.state = productState.aggregate;
            this.orden.total += isProductReject ? (product.total ? product.total : 0) : 0;
            if(this.orden.state != ordenState.process){
                this.ordenService.updateState(this.orden.id, ordenState.process).subscribe(() => {
                    this.orden.state = ordenState.process;
                }, error => {
                    console.log('Ha ocurrido un error :: [ADD/TABLE-PRODUCT] :: 001', error);
                })
            }
            if(this.isFinished()){
                this.finish();
            }else{
                this.isFinish = false;
            }
        }, error => {
            console.log('Ha ocurrido un error :: [ADD/TABLE-PRODUCT] :: 003', error);
        })
    }

    reject(product: Product){
        if(confirm('¿Desea rechazar el producto?')){
            this.ordenService.updateProductState(product.ordenId ? product.ordenId : null, productState.reject).subscribe(() => {
                product.state = productState.reject;
                let countProduct = 0;
                this.orden.products.map( product => countProduct += product.state == productState.reject ? 1 : 0 );
                this.orden.total -= product.total ? product.total : 0;
                if(countProduct == this.orden.products.length && this.orden.state != ordenState.reject){
                    this.ordenService.updateState(this.orden.id ? this.orden.id : null, ordenState.reject)
                    .subscribe(() => {
                        this.orden.state = ordenState.reject;
                        if(this.isFinished()){
                            this.finish();
                        }else{
                            this.isFinish = false;
                        }
                    }, error => {
                        console.log('Ha ocurrido un error :: [REJECT/TABLE-PRODUCT] :: 001', error);
                    });
                }
                this.isFinish = this.isFinished();
            }, error => {
                console.log('Ha ocurrido un error :: [REJECT/TABLE-PRODUCT] :: 002', error);
            });
        }
    }

    isFinished(){
        let countProductChange = 0;
        let countProductReject = 0;
        this.orden.products.map(product => countProductChange += product.state != productState.unaggregated ? 1: 0);
        this.orden.products.map(product => countProductReject += product.state == productState.reject ? 1: 0);
        let countFlag = countProductChange == this.orden.products.length && countProductReject < this.orden.products.length;
        return countFlag && this.orden.state != ordenState.finish;
    }

    finish(){
        this.isFinish = true;
        if(confirm("¿Desea finalizar el pedido?")){
            this.ordenService.updateState(this.orden.id ? this.orden.id : null, ordenState.finish).subscribe(() => {
                this.orden.state = ordenState.finish;
                this.isFinish = false;
            }, error => {
                console.log('Ha ocurrido un error :: [FINISH/TABLE-PRODUCT]', error);
            })
        }
    }

    send(){
        this.isFinish = false;
        this.ordenService.updateState(this.orden.id ? this.orden.id : null, ordenState.send).subscribe(() => {
            this.orden.state = ordenState.send;
        }, error => {
            console.log('Ha ocurrido un error :: [SEND/TABLE-PRODUCT]', error);
        })
    }
}
