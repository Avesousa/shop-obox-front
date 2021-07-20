import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Category } from 'src/app/modules/category/model/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../model/product.interface';
import { ProductInternal } from '../../model/product.internal';

@Component({
  selector: 'product-form',
  templateUrl: './product.form.component.html',
  styleUrls: ['../../product.style.scss'],
})
export class ProductFormComponent implements OnInit {
  constructor(
    public productService: ProductService,
    public categoryService: CategoryService) {}

  public files: Array<File> = [];
  public listCategories: Array<Category> = [];
  
  //Inputs
  @Input() 
  public isCreation: boolean = false;
  @Input()
  public labelAction?: string;
  @Input() 
  public product: ProductInternal = this.getDefaultProduct();

  //Output
  @Output()
  public toBackEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public toActionEvent: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe( (result:any) => {
      this.listCategories = result.data;
    })
  }


  setFiles(e: any):void {
      if(this.product.file)
        this.product.file.push(e.target.files[0]);
      else
        console.log('No existe');
  }

  send():void {
    console.log('enviado');
  }

  toBack(){
    this.toBackEvent.emit(null);
  }

  toAction(){
    if(this.product.category > 0){
      this.toActionEvent.emit(this.product);
    }
  }

  getDefaultProduct(): ProductInternal{
    return {
        name: '',
        description: '',
        ext: '',
        id: null,
        imagen: '',
        category: 0,
        file: [],
        sale: 0,
        price: 0.0,
        priceSale: 0.0,
        rating: 5
    };
}

}
