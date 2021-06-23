import { ProductLocalStorageService } from 'src/app/product/shared/service/product-ls.service';
import { SpinnerDirective } from './../../layout/spinner/spinner.directive';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
export class ProductListComponent implements OnInit, OnChanges {

  public products: Product[];
  //public sortOptions: SelectItem[];
  public sortOrder: number;
  public sortField: string;
  public titleView: string = '';
  @Input() type: string;
  @Input() value: any;
  @Input() title: any;
  public load: boolean = true;
  public spinnerDirective: SpinnerDirective = null;
  public icons = {
    startActive: faStar
  }

  constructor(private productService: ProductService, private productLocalStorageService: ProductLocalStorageService) { }

  ngOnInit(): void {
    this.load = true;
    this.configSpinner();
    switch (this.type) {
      case "category":
        this.productService.getProductsByCategory(this.value).subscribe((response: any) => {
          this.products = response.data;
          this.load = false;
          console.log(this.title);
          this.titleView = this.title;
        })
        break;
      case "favourite":
        this.products = this.productLocalStorageService.getLocalStorage(false);
        this.load = false;
        this.titleView = 'Productos favoritos';
        break;
      default:
        this.productService.getProducts().subscribe((response: any) => {
          this.products = response.data;
          this.load = false;
          this.titleView = 'Cátalogo de productos';
        })
        break;
    }

  }

  configSpinner(): void{
    this.spinnerDirective = {
      center: true,
      showMessage: false,
      size: 'xl'
    }
  }

  ngOnChanges(): void{
    this.ngOnInit();
  }

}
