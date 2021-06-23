import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

const URL: string = `${environment.URL_SERVE}/productos/`;
const STORE =  environment.STORE;
const LIST: string = 'list';
const IMAGE: string = 'image/';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders({ 'content-Type': 'application/json', 'store': STORE });

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(URL + LIST, { headers: this.header });
  }

  getProductsLimit(max: number): Observable<Product[]> {
    return this.http.get<any>(`${URL}${LIST}/${max}`, { headers: this.header });
  }

  getProductsByCategory(category: number): Observable<Product[]> {
    return this.http.get<any>(`${URL}${LIST}/category/${category}`, { headers: this.header });
  }

  getUrlImage(): string {
    return URL + IMAGE;
  }

}
