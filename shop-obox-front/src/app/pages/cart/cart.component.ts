import { faMoneyCheck, faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ProductLocalStorageService } from 'src/app/product/shared/service/product-ls.service';
import { Product } from './../../product/shared/model/product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/shared/service/product.service';
import { Zone } from 'src/app/model/zone.model';
import { User } from 'src/app/model/user.model';
import { UserInfoComponent } from 'src/app/layout/user-info/user-info.component';
import { UtilNumber } from 'src/app/util/utilNumber';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';
import { AlertComponent } from 'src/app/layout/alert/alert.component';

@Component({
  selector: 'page-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class PageCartComponent implements OnInit {

  public products: Product[];
  public totalPriceProduct: number;
  public totalBuy: number;
  public isDisableForBuy: boolean = false;
  
  public zone: Zone;
  public user: User;

  @ViewChild(UserInfoComponent) userInfo: UserInfoComponent;
  @ViewChild('alertCart') alert : AlertComponent;

  icons = {
    cart: faShoppingCart,
    remove: faTrash,
    cashier: faMoneyCheck
  };

  constructor(
    private router: Router,
    private productLocalStorageService: ProductLocalStorageService,
    public productService: ProductService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.zone = this.user ? this.user.zone : null;
    this.products = this.productLocalStorageService.getLocalStorage(true);
    this.getTotalBuy();
    this.toDisableForBuy();
  }

  goToCatalogue(){
    this.router.navigateByUrl('/products/list');
  }

  goToHome(){
    this.router.navigateByUrl('/');
  }

  getTotalPriceProduct(){
    this.totalPriceProduct = this.productLocalStorageService.getTotal();
  }

  getTotalBuy(){
    this.getTotalPriceProduct();
    this.totalBuy = UtilNumber.round(this.totalPriceProduct + (this.zone ? this.zone.price : 0));
  }

  removeItem(productId: number){
    this.productLocalStorageService.deleteLocalStorage(productId,true);
    this.ngOnInit();
  }

  changeZone(zone: Zone){
    this.zone = zone;
    this.getTotalBuy();
    this.toDisableForBuy();
  }

  changeUser(user: User){
    this.user = user;
    this.toDisableForBuy();
  }

  changeCount(product: Product){
    this.productLocalStorageService.updateLocalStorage(product);
    this.ngOnInit();
  }

  toBuy(){
    let order: Order= {
      user: this.user,
      products: this.products
    }
    console.log("se proceso la compra");
    this.orderService.create(order).subscribe( (result) => {
      this.productLocalStorageService.emptyList(true);
      this.alert.show(`La order número ${result.data.order} se ha creado correctamente`, AlertComponent.SUCCESS);
      this.ngOnInit();
      setTimeout( ()=>{
        this.goToHome();
      },2000);
    }, (err) => {
      this.alert.show(`Ha ocurrido un error al crear la orden`, AlertComponent.DANGER);
    })

  }

  toDisableForBuy(){
    let boolUser = this.user ? this.user.id != null : false;
    let boolProduct = this.products.length > 0;
    this.isDisableForBuy = !(boolUser && boolProduct);
  }

}