import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductLocalStorageService } from 'src/app/product/shared/service/product-ls.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  countProduct: number = 0;
  icons = {
    instagram : faInstagram,
    facebook: faFacebook,
    whatsapp: faWhatsapp,
    cart: faShoppingCart
  };

  constructor(private productLocalStorage: ProductLocalStorageService) { }

  ngOnInit(): void {
    this.countProduct = this.productLocalStorage.getLocalStorage(true).length;
  }

}
