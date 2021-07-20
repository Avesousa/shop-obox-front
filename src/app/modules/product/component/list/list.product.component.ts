import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SearchComponent } from 'src/app/modules/commons/search/search.component';
import { ProductService } from 'src/app/services/product.service';
import { ProductInternal } from '../../model/product.internal';

@Component({
    selector: 'product-list',
    templateUrl: './list.product.component.html',
    styleUrls: ['../../product.style.scss']
})
export class ProductListComponent implements OnInit {
    
    private list: ProductInternal[] = [];
    public listForView: ProductInternal[] = [];
    public find: string[] = ["name","description","id"];

    @ViewChild("searchProduct") searchProduct: SearchComponent;

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void { 
        this.productService.getProduct().subscribe( (result: any) => {
            this.list = result.data;
            this.searchProduct.setList(this.list);
        } )
    }

    toGetAll(_event:any){
        this.ngOnInit();
    }

    toPutListProduct(event: any[]){
        this.listForView = event;
    }
}
