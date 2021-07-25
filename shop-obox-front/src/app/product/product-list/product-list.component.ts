import { ProductLocalStorageService } from 'src/app/product/shared/service/product-ls.service';
import { SpinnerDirective } from './../../layout/spinner/spinner.directive';
import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../shared/model/product.model';
//import { SelectItem } from 'primeng/api';
//import { PrimeNGConfig } from 'primeng/api';
import { ProductService } from '../shared/service/product.service';
import { SearchComponent } from 'src/app/layout/search/search.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges{

  @Input() type: string;
  @Input() value: any;
  @Input() title: any;
  @ViewChild("searchProduct") search: SearchComponent;
  public find: string[] = ["name", "description", "id"];
  public placeholderSearch: String = "Buscar producto";
  public products: Product[];
  private listProduct: Product[];
  //public sortOptions: SelectItem[];
  public sortOrder: number;
  public sortField: string;
  public titleView: string = '';
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
          this.updateSearch(response.data, this.title);
          this.placeholderSearch = `Buscar producto en ${this.title}`
        })
        break;
      case "favourite":
        this.productLocalStorageService.getLocalStorage(false).then( (response: any) => {
          console.log(response);
          this.updateSearch(response,'Productos favoritos');
          this.placeholderSearch = 'Buscar en tus favoritos'
        })
        break;
      default:
        this.productService.getProducts().subscribe((response: any) => {
          console.log('List of products',response.data)
          this.updateSearch(response.data,'Cátalogo de productos');
          this.placeholderSearch = 'Busca un producto';
        })
        break;
    }

  }

  updateSearch(products,title){
    this.products = products;
    this.listProduct = products;
    this.load = false;
    this.search.setList(this.listProduct);
    this.titleView = title;
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

  toPutList(event: any[]){
    this.products = event;
  }

}
