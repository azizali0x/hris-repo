import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HTTP } from './helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetinfoService {

  constructor(
    private http: HttpClient
  ) { }

  getGoals(): Observable<any> {
    return this.http.get(`${HTTP}employee/goals/${localStorage.getItem('user')}`);
  }

  getReviews(): any {
    return this.http.get(`${HTTP}employee/reviews/${localStorage.getItem('user')}`)
  }

}
