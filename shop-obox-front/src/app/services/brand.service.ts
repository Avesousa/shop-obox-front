import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Brand } from '../layout/footer/brand/shared/brand.model';

const URL: string = `${environment.URL_SERVE}/brands/`;
const STORE =  environment.STORE;
const LIST: string = 'list';
const IMAGE: string = 'image/';



@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders({ 'content-Type': 'application/json', 'store': STORE });

  getBrands(): Observable<Brand[]> {
    return this.http.get<any>(URL + LIST, { headers: this.header });
  }

  getUrlImage(): string{
    return URL + IMAGE;
  }

}