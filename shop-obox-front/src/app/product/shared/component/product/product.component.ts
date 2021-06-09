import { Component, Input } from '@angular/core';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faStar, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;
  @Input() isList: boolean;
  isFavourite = false;

  public icons = {
    start: faStar,
    heart: faHeart,
    heartSolid: faHeartSolid,
    view: faEye,
    cart: faShoppingCart
  }

  constructor(public productService: ProductService) {
   }

  fillRating(value) {
    this.getFavourite();
    let raiting = (isNaN(value) ? 4 : value);
    let response = raiting > 0 ? Array(raiting).fill(raiting, 0, 5) : [];
    return response;
  }

  getFavourite(): boolean{
    this.isFavourite = !(window.localStorage.getItem(`fav-${this.product.code}`) === null);
    return this.isFavourite;
  }

  setFavourite(){
    window.localStorage.setItem(`fav-${this.product.code}`,'yes');
    this.isFavourite = true;
  }

  deleteFavourite(){
    window.localStorage.removeItem(`fav-${this.product.code}`);
    this.isFavourite = false;
  }

}
