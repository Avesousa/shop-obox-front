import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../modules/category/model/category.interface';

const URL: string = `${environment.URL_SERVE}/categorias/`;
const STORE =  environment.STORE;
const LIST: string = 'list';
const IMAGE: string = 'image/';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  private header = {
    headers: new HttpHeaders(
      {
        'content-Type': 'application/json',
        'store': STORE
      })
  };

  create(category: Category): Observable<any>{
    return this.http.post(`${URL}/save`,category, this.header);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<any>(URL + LIST, this.header);
  }

  getUrlImage(): string {
    return URL + IMAGE;
  }

  update(category: Category): Observable<any>{
    return this.http.put(`${URL}${category.id}`,category, this.header);
  }


}
