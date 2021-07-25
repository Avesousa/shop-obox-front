import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../modules/product/model/product.interface';
import { FileService } from './file.service';

const URL: string = `${environment.URL_SERVE}/productos/`;
const STORE = environment.STORE;
const IMAGE: string = 'image/';
const SAVEIMAGE: string = 'save/image/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private fileService: FileService) {}

  private header = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
      store: STORE,
    }),
  };

  create(product: Product): Observable<any> {
    return this.http.post(`${URL}/save`, product, this.header);
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<any>(URL, this.header);
  }

  getUrlImage(): string {
    return URL + IMAGE;
  }

  setImage(id: string | number, files: Array<File>, name: string): Promise<any> {
    return this.fileService.saveFile(files, name, `${URL}${SAVEIMAGE}${id}`);
  }

  update(product: Product): Observable<any> {
    return this.http.put(`${URL}${product.id}`, product, this.header);
  }
}
