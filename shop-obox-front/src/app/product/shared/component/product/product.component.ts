import { Component, Input } from '@angular/core';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
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

  public icons = {
    start: faStar,
    heart: faHeart,
    view: faEye,
    cart: faShoppingCart
  }

  constructor(public productService: ProductService) { }

  fillRating(value) {
    let raiting = (isNaN(value) ? 4 : value);
    let response = raiting > 0 ? Array(raiting).fill(raiting, 0, 5) : [];
    return response;
  }
}
