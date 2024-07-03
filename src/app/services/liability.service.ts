import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LiabilityService {

  private apiUrl = `${environment.apiUrl}/liability`;


  constructor(private http: HttpClient) { }

  getLiability(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createLiability(liability: any): Observable<any> {
    return this.http.post(this.apiUrl, liability);
  }

  updateLiability(id: string, liability: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, liability);
  }

  deleteLiability(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
