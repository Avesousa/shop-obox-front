import { Component, OnInit, ViewChild } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SpinnerComponent } from 'src/app/layout/spinner/spinner.component';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'product-featured',
  templateUrl: './product-featured.component.html',
  styleUrls: ['./product-featured.component.css']
})
export class ProductFeaturedComponent implements OnInit {
  @ViewChild('spinner') spinner : SpinnerComponent;
  public responsiveOptions: Array<any>;
  public spinnerIsView: boolean = false;
  public products: Product[];
  public icons = {
    startActive: faStar
  }

  constructor(private productService: ProductService) {
    this.getProducts();
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.spinnerIsView = true;
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res.data;
      this.spinnerIsView = false;
    })
  }

  fillRating(value) {
    return Array(value).fill(value, 0, 5);
  }

}
