import { faMoneyCheck, faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ProductLocalStorageService } from 'src/app/product/shared/service/product-ls.service';
import { Product } from './../../product/shared/model/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/shared/service/product.service';
import { Zone } from 'src/app/model/zone.model';
import { User } from 'src/app/model/user.model';
import { ZoneService } from 'src/app/services/zone.service';
import { UserInfoComponent } from 'src/app/layout/user-info/user-info.component';
import { UtilNumber } from 'src/app/util/utilNumber';

@Component({
  selector: 'page-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class PageCartComponent implements OnInit {

  public products: Product[];
  public totalPriceProduct: number;
  public totalBuy: number;
  public zone: Zone;
  public user: User;

  @ViewChild(UserInfoComponent) userInfo: UserInfoComponent;

  icons = {
    cart: faShoppingCart,
    remove: faTrash,
    cashier: faMoneyCheck
  };

  constructor(
    private router: Router,
    private productLocalStorageService: ProductLocalStorageService,
    public productService: ProductService) { }

  ngOnInit(): void {
    this.zone = null;
    this.products = this.productLocalStorageService.getLocalStorage(true);
    this.getTotalBuy();
  }

  goToCatalogue(){
    this.router.navigateByUrl('/products/list');
  }

  getTotalPriceProduct(){
    this.totalPriceProduct = this.productLocalStorageService.getTotal();
  }

  getTotalBuy(){
    this.getTotalPriceProduct();
    this.totalBuy = UtilNumber.round(this.totalPriceProduct + (this.zone ? this.zone.price : 0));
  }

  changeZone(zone: Zone){
    console.log(zone);
    this.zone = zone;
    this.getTotalBuy();
  }

}
