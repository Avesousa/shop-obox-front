import { faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ProductLocalStorageService } from 'src/app/product/shared/service/product-ls.service';
import { Product } from './../../product/shared/model/product.model';
import { Params } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/product/shared/service/product.service';

@Component({
  selector: 'page-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class PageCartComponent implements OnInit {

  public products: Product[];
  public totalBUy: number;
  icons = {
    cart: faShoppingCart,
    remove: faTrash
  };

  constructor(
    private router: Router,
    private productLocalStorageService: ProductLocalStorageService,
    public productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productLocalStorageService.getLocalStorage(true);
    this.getTotalBuy();
    console.log(this.products);
  }

  goToCatalogue(){
    this.router.navigateByUrl('/products/list');
  }

  getTotalBuy(){
    this.totalBUy = this.productLocalStorageService.getTotal();
  }

}
