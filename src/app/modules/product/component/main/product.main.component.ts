import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../model/product.interface';
import { ProductInternal } from '../../model/product.internal';

@Component({
  selector: 'product-model',
  templateUrl: './product.main.component.html',
  styleUrls: ['../../product.style.scss'],
})
export class ProductModelComponent implements OnInit {
  public viewForm: boolean = false;

  @Input()
  public isCreation: boolean = false;
  @Input()
  public isUpdate: boolean = false;
  @Input()
  public product: ProductInternal = this.getDefaultProduct();

  @Output() private toGetAllEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    if (this.product.id)
      this.product = {
        ...this.product,
        file: [],
      };
  }

  add() {
    this.viewForm = true;
  }

  update() {
    this.isUpdate = true;
  }

  toEventBack(_event: any) {
    this.toBack();
  }

  toBack() {
    this.viewForm = false;
    this.isUpdate = false;
  }

  toRefresh() {
    this.toGetAllEvent.emit(null);
  }

  toUpdate(productInternal: ProductInternal) {
    const {id, name, description, 
      price, priceSale,quantity,
      category, imagen, ext, rating, sale, file} = productInternal;

    let product: Product = {
      id, name, description, price, priceSale, quantity, category,
      imagen, ext, rating, sale};

    this.productService.update(product).subscribe((result) => {
      if(file.length > 0){
        productInternal.id = result.data.id;
        
        this.toSaveFile(productInternal)
        .then((result) => {
          console.log("ToUpdate::toSaveFile ==>",result);
          this.toActionCommons();
        })
        .catch( (err) => {
          console.log("ToUpdate::toSaveFile ==>", err);
        });
      }else{
        this.toActionCommons();
      }
    });
  }

  toCreate(productInternal: ProductInternal) {
    let product: Product = { ...productInternal };
    this.productService.create(product).subscribe((result) => {
      productInternal.id = result.data.id;
      this.toSaveFile(productInternal).then((result) => {
        this.toActionCommons();
      });
    });
  }

  toSaveFile(product: ProductInternal): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (product.file.length > 0 && (product.id !== undefined && product.id !== null)){
        this.productService
          .setImage(product.id, product.file, 'image')
          .then((result) => {
            console.log("PRODUCT::ToSaveFile::then", result);
            resolve(result);
          })
          .catch((err) => {
            console.log("PRODUCT::ToSaveFile::catch", err);
            reject(err);
          });
      }else{
        reject(false);
      }
    });
  }

  toActionCommons(){
    this.toBack();
    this.toRefresh();
    this.product = this.getDefaultProduct();
  }

  getDefaultProduct(): ProductInternal {
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