import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order.model';

const URL: string = `${environment.URL_SERVE}/order/`;
const STORE: string = environment.STORE;

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) { }

    private header = {
        headers: new HttpHeaders(
            {
            'content-Type': 'application/json',
            'store': STORE
            })
    };

    create(order: Order):Observable<any> {
        return this.http.post(URL,order,this.header);
    }
}