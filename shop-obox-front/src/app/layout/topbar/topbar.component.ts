import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  icons = {
    instagram : faInstagram,
    facebook: faFacebook,
    whatsapp: faWhatsapp,
    cart: faShoppingCart
  };

  constructor() { }

  ngOnInit(): void {
  }

}
