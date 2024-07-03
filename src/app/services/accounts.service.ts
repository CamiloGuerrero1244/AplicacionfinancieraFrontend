import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private apiUrl = `${environment.apiUrl}/accounts`;

  constructor(private http:HttpClient) { }

  getAccounts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createAccounts(accounts: any): Observable<any> {
    return this.http.post(this.apiUrl, accounts);
  }

  updateAccounts(id: string, accounts: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, accounts);
  }

  deleteAccounts(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
