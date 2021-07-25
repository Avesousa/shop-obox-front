import { Component, OnInit, ViewChild } from '@angular/core';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/product/shared/model/product.model';
import { ProductLocalStorageService } from 'src/app/product/shared/service/product-ls.service';
import { ProductService } from 'src/app/product/shared/service/product.service';
import { Cart } from 'src/app/layout/cart/cart.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
    selector: 'product-stand',
    templateUrl: './productStand.component.html',
    styleUrls: ['./productStand.scss']
})
export class ProductStandComponent implements OnInit {
    
    @ViewChild('alertProductStand') alert : AlertComponent;

    public products: Product[];
    public productStandView: boolean = false;
    public productMain: Product;
    private cartService: Cart;

    public icons = {
        start: faStar,
        cart: faShoppingCart
      };

    constructor(
        private productService: ProductService,
        private productLocalStorageService: ProductLocalStorageService) { 
            this.cartService = Cart.getInstance();
        }

    ngOnInit(): void { 
        this.productService.getProductsStand(4).subscribe( (result: any) => {
            this.products = result.data;
            this.productMain = this.products[0];
            this.products.splice(0,1);
            this.productStandView = true;
        }, (error: any) => {
            this.products = [];
        })
    }


    fillRating(value) {
        let raiting = isNaN(value) ? 4 : value;
        let response = raiting > 0 ? Array(raiting).fill(raiting, 0, 5) : [];
        return response;
    }

    addCart(product:Product) {
        product.quantyBuy = 1;
        this.productLocalStorageService.saveLocalStorage(product, true);
        this.cartService.updateCount();
        this.alert.show("Producto agregado correctamente, ¡Vamos todavía!",AlertComponent.SUCCESS);
    }
    
}
