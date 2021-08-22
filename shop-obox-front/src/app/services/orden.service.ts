import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orden } from '../model/orden.model';

const URL: string = `${environment.URL_SERVE}/orden/`;
const STORE: string = environment.STORE;

@Injectable({
    providedIn: 'root'
})
export class OrdenService {

    constructor(private http: HttpClient) { }

    private header = {
        headers: new HttpHeaders(
            {
            'content-Type': 'application/json',
            'store': STORE
            })
    };

    create(orden: Orden):Observable<any> {
        return this.http.post(URL,orden,this.header);
    }
}