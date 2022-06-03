import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP } from './helper';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  user(login: any) :Observable<any> {
    return this.http.post(`${HTTP}${login.type}`,login)
  }

  // TODO: work on this to use validation

  isLogged() : boolean {
    if(localStorage.length > 0){
      return true
    }
    return false
  }

}
