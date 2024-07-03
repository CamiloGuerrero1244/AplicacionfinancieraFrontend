import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = `${environment.apiUrl}/transaction`;


  constructor(private http: HttpClient) { }

  getTransactions(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createTransaction(transaction: any): Observable<any> {
    return this.http.post(this.apiUrl, transaction);
  }

  updateTransaction(id: string, transaction: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, transaction);
  }

  deleteTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}



