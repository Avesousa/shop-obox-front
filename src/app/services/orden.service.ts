import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orden } from '../modules/orden/model/orden.interface';

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

    getOrdens():Observable<Orden[]> {
        return this.http.get<any>(URL,this.header);
    }

    updateState(id: number | null, state: number):Observable<any> {
        return this.http.put(`${URL}${id}/${state}`,this.header);
    }

    updateProductState(id:number | null, state: number):Observable<any> {
        return this.http.put(`${URL}product/${id}/${state}`,this.header);
    }
}