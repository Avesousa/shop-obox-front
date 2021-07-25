import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { environment } from '../../../../environments/environment';
import { UtilNumber } from 'src/app/util/utilNumber';
import { ProductService } from './product.service';

const URL: string = `${environment.URL_SERVE}/products/`;
const STORE = environment.STORE;
const LIST: string = 'list';
const IMAGE: string = 'image/';



@Injectable({
  providedIn: 'root'
})
export class ProductLocalStorageService {
  
  constructor(private productService: ProductService) { }

  //Almacenar en el LS
  saveLocalStorage(product: Product,isToCart:boolean) {
    let products: Product[] = this.getLocal(isToCart);
    
    //Agregar el product al carrito
    let verifProd = products.find(prod => product.id == prod.id);
    if (verifProd == null || verifProd == undefined) {
      //Agregamos el precio
      product.totalBuy = this.calculatorPrice(product);
      //Agregamos al LS
      products.push(product);
      this.setLocalStorage(products, isToCart);
    }else if(isToCart){
      //TODO cambiar en caso de producir el evento de cambio
      verifProd.quantyBuy += product.quantyBuy;
      verifProd.totalBuy = this.calculatorPrice(verifProd);
      this.deleteLocalStorage(verifProd.id, isToCart);
      this.saveLocalStorage(verifProd, isToCart);
    }

  }

  updateLocalStorage(product: Product){
    this.deleteLocalStorage(product.id, true);
    this.saveLocalStorage(product,true);
  }

  //Comprobar que hay elementos en el LS
  async getLocalStorage(isToCart:boolean): Promise<Product[]> {
      let productLS: Product[] = this.getLocal(isToCart);
      let products: Product[] = [];
      console.log("======> This are products in local", productLS);
      
      if(productLS){
        if(productLS.length > 0){
          
          for(let product of productLS){
            
            let productNew = await this.getProduct(product.id);
            products = this.insertProduct(product, productNew[0], products);
          }

        }else{ return [] }
      }else{ return [] }

      await console.log('<===== This are products return', products);
      return products;

  }

  insertProduct(product: Product, productNew: Product, productList: Product[]): Product[]{
    productNew.quantyBuy = product.quantyBuy;
    productNew.totalBuy = product.totalBuy;
    productList.push(productNew);
    console.log("InsertProduct :: Product insert | product list", productNew, productList);
    return productList;
  }

  getProduct(id): Promise<Product>{
    return this.productService.getProduct(id).toPromise();
  }

  getLocal(isToCart:boolean){
    let productLS: Product[];

    //Comprobar si hay algo en LS
    if (localStorage.getItem(isToCart ? "products" : "favourite") === null) {
      productLS = [];
    } else {
      productLS = JSON.parse(localStorage.getItem(isToCart ? "products" : "favourite"));
    }
    return productLS;

  }

  //Eliminar product por ID del LS
  deleteLocalStorage(productID: number, isToCart:boolean) {
    let productLS: Product[];
    //Obtenemos el arreglo de products
    productLS = this.getLocal(isToCart);
    //Comparar el id del product borrado con LS
    let index = productLS.findIndex(prod => prod.id == productID);
    productLS.splice(index, 1);
    //Añadimos el arreglo actual al LS
    this.setLocalStorage(productLS, isToCart);
  }

  emptyList(isToCart: boolean){
    localStorage.setItem(isToCart ? "products" : "favourite", JSON.stringify([]));
  }

  setLocalStorage(products: Product[], isToCart:boolean){
    localStorage.setItem(isToCart ? "products" : "favourite", JSON.stringify(products));
  }

  getTotal():number{
    let result: number = 0;
    this.getLocal(true).forEach((product) => UtilNumber.round(result += this.calculatorPrice(product)));
    return result;
  }

  calculatorPrice( product:Product ) : number {
    return UtilNumber.round((product.sale ? product.priceSale : product.price) * (product.quantyBuy ? product.quantyBuy : 1));
  }

}
