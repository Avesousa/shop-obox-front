import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { UtilNumber } from 'src/app/util/utilNumber';

const URL: string = `${environment.URL_SERVE}/products/`;
const STORE = environment.STORE;
const LIST: string = 'list';
const IMAGE: string = 'image/';



@Injectable({
  providedIn: 'root'
})
export class ProductLocalStorageService {

  constructor() { }

  //Almacenar en el LS
  saveLocalStorage(product: Product,isToCart:boolean) {
    let products: Product[] = this.getLocalStorage(isToCart);
    
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

  //Comprobar que hay elementos en el LS
  getLocalStorage(isToCart:boolean): Product[] {
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
    productLS = this.getLocalStorage(isToCart);
    //Comparar el id del product borrado con LS
    let index = productLS.findIndex(prod => prod.id == productID);
    productLS.splice(index, 1);
    //Añadimos el arreglo actual al LS
    this.setLocalStorage(productLS, isToCart);
  }

  setLocalStorage(products: Product[], isToCart:boolean){
    localStorage.setItem(isToCart ? "products" : "favourite", JSON.stringify(products));
  }

  getTotal():number{
    let result: number = 0;
    this.getLocalStorage(true).forEach((product) => UtilNumber.round(result += this.calculatorPrice(product)));
    return result;
  }

  calculatorPrice( product:Product ) : number {
    return UtilNumber.round((product.sale ? product.priceSale : product.price) * (product.quantyBuy ? product.quantyBuy : 1));
  }

}
