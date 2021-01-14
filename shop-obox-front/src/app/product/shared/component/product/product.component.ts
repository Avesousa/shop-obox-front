import { Component, Input, OnInit } from '@angular/core';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product : Product;
  @Input() isList: boolean;

  public icons = {
    start: faStar,
    heart: faHeart,
    view: faEye,
    cart: faShoppingCart
  }

  constructor() { }

  ngOnInit(): void {
  }

  fillRating(value){
    return Array(value).fill(value,0,5);
  }
}
