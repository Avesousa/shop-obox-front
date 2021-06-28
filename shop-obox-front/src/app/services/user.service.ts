import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

const URL: string = `${environment.URL_SERVE}/auth/`;
const STORE: string = environment.STORE;
const TOKEN: string = 'security-token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private header = {
    headers: new HttpHeaders(
      {
        'content-Type': 'application/json',
        'store': STORE
      })
  };

  verify(): Observable<any> {
    return this.http.get(`${URL}verify`, this.createHeader(this.getToken()));
  }

  register(user: User): Observable<any> {
    return this.http.post(`${URL}register`, user, this.header);
  }

  login(user: User): Observable<any>{
    return this.http.post(`${URL}login`,user,this.header);
  }

  //Service for localstorage.

  getToken(){
    let token = localStorage.getItem(TOKEN);
    return token === null ? TOKEN : token;
  }

  setToken(token){
    localStorage.setItem(TOKEN,token);
  }
  
  logOut(){
    localStorage.removeItem(TOKEN);
  }

  createHeader(token){
    return {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'store': STORE,
        'Authorization': `Bearer ${token}`
      })
    }
  }

}
