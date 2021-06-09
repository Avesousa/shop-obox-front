import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';

const URL: string = `${environment.URL_SERVE}/categorias/`;
const STORE =  environment.STORE;
const LIST: string = 'list';
const IMAGE: string = 'image/';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders({ 'content-Type': 'application/json', 'store': STORE });

  getCategory(): Observable<Category[]> {
    return this.http.get<any>(URL + LIST, { headers: this.header });
  }

  getUrlImage(): string{
    return URL + IMAGE;
  }

}