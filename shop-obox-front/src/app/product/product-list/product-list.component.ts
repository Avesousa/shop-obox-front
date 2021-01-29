import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../shared/model/product.model';
//import { SelectItem } from 'primeng/api';
//import { PrimeNGConfig } from 'primeng/api';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  //public sortOptions: SelectItem[];
  public sortOrder: number;
  public sortField: string;
  public icons = {
    startActive: faStar
  }

  constructor(private productService: ProductService, /*private primeng: PrimeNGConfig*/) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.data;
    })
  }

}
