import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'product-featured',
  templateUrl: './product-featured.component.html',
  styleUrls: ['./product-featured.component.css']
})
export class ProductFeaturedComponent implements OnInit {

  public responsiveOptions: Array<any>;
  public products: Product[];
  public icons = {
    startActive: faStar
  }

  constructor(private primeConfig: PrimeNGConfig, private productService: ProductService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '768px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
    this.primeConfig.ripple = true;
    this.products = this.productService.getProducts();
  }

  fillRating(value){
    return Array(value).fill(value,0,5);
  }

}
