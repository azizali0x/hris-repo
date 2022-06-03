import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP } from './helper'


@Injectable({
  providedIn: 'root'
})
export class SendinfoService {

  constructor(
    private readonly http: HttpClient
  ) { }

  sendGoal(data: any): Observable<any>{
    return this.http.post(`${HTTP}employee/add-goal`,data)
  }
}
