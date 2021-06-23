import { Component, Input } from '@angular/core';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faStar, faHeart as faHeartSolid, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../model/product.model';
import { ProductLocalStorageService } from '../../service/product-ls.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;
  @Input() isList: boolean;
  isFavourite:boolean = false;
  isCart:boolean = false;

  public icons = {
    start: faStar,
    heart: faHeart,
    heartSolid: faHeartSolid,
    view: faEye,
    cart: faShoppingCart,
    ok: faCheck
  }

  constructor(public productService: ProductService, private productLocalStorageService: ProductLocalStorageService) {
   }

  fillRating(value) {
    this.getFavourite();
    let raiting = (isNaN(value) ? 4 : value);
    let response = raiting > 0 ? Array(raiting).fill(raiting, 0, 5) : [];
    return response;
  }

  getFavourite(): boolean{
    let productLS = this.productLocalStorageService.getLocalStorage(false).find(prod => prod.id == this.product.id);
    this.isFavourite = productLS != null && productLS != undefined;
    return this.isFavourite;
  }

  setFavourite(){
    this.productLocalStorageService.saveLocalStorage(this.product, false);
    this.isFavourite = true;
  }

  deleteFavourite(){
    this.productLocalStorageService.deleteLocalStorage(this.product.id,false);
    this.isFavourite = false;
  }

  addCart(){
    this.productLocalStorageService.saveLocalStorage(this.product, true);
    this.disabledQuantyProduct();
  }

  deteleToCart(){
    this.productLocalStorageService.deleteLocalStorage(this.product.id,true);
  }

  viewQuantyProduct(){
    this.product.quantyBuy = 1;
    let element = document.querySelector(`#quanty-${this.product.id}`) as HTMLElement;
    element.classList.add('quanty-product-view');
    element.classList.remove('quanty-product-disabled');
    element.classList.remove('quanty-product-star');
  }

  disabledQuantyProduct(){
    let element = document.querySelector(`#quanty-${this.product.id}`) as HTMLElement;
    let productElement = document.querySelector(`#success-${this.product.id}`) as HTMLElement;
    element.classList.add('quanty-product-disabled')
    element.classList.remove('quanty-product-view');
    productElement.classList.add('success-buy-view');
    setTimeout(() => { productElement.classList.remove('success-buy-view') }, 3000)
  }

}
