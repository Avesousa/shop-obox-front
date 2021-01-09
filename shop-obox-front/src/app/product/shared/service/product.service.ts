import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('../mock/products.json')
    .toPromise()
    .then(res => <Product[]>res.data)
    .then(data => { return data; });
  }

}
