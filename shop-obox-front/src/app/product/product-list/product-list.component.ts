import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  public sortOptions: SelectItem[];
  public sortOrder: number;
  public sortField: string;

  constructor(private productService: ProductService, private primeng: PrimeNGConfig) { }

  ngOnInit(): void {

    this.productService.getProducts().then(data => this.products = data);

    this.sortOptions = [
      { label: 'Precio de mayor a menor', value: '!price' },
      { label: 'Precio de menor a mayor', value: 'price' }
    ];

    this.primeng.ripple = true;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
