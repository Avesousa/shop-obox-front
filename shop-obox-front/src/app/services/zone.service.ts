import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Zone } from '../model/zone.model';

const URL: string = `${environment.URL_SERVE}/zone/`;
const STORE =  environment.STORE;
const LIST: string = 'list';



@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders({ 'content-Type': 'application/json', 'store': STORE });

  getZone(): Observable<Zone[]> {
    return this.http.get<any>(URL + LIST, { headers: this.header });
  }

}