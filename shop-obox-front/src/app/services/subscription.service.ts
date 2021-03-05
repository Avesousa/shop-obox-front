import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const URL: string = `${environment.URL_SERVE}/subscription/save/`;
const STORE: string = environment.STORE;


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders({ 'content-Type': 'application/json', 'store': STORE });

  //this save subscription the client
  saveSubscription(email: string): Observable<any> {
    return this.http.get<any>(URL + email, { headers: this.header });
  }

}