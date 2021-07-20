import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faUser, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { ProductLocalStorageService } from 'src/app/product/shared/service/product-ls.service';
import { Cart } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartService: Cart; 
  icons = {
    instagram : faInstagram,
    facebook: faFacebook,
    whatsapp: faWhatsapp,
    cart: faShoppingCart,
    user: faUser,
    heartSolid: faHeartSolid,
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cartService = Cart.getInstance();
    this.cartService.updateCount();
  }

  goToFavourite():void{
    this.router.navigateByUrl('products/favourite');
  }
  goToCart():void{
    this.router.navigateByUrl('checkout');
  }

}
