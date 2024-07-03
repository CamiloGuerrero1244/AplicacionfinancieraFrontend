import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private apiUrl = `${environment.apiUrl}/users`;



  constructor(private http: HttpClient) { }

  
  login(credentials: { identification: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        this.setToken(response.token);
        this.setUserId(response.userId);
      })
    );
  }


  // register(user: { 
  //   identification: number, 
  //   name: string, 
  //   lastname: string, 
  //   phone: string, 
  //   email: string, 
  //   password: string 
  // }): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/register`, user);
  // }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  setUserId(userId: string): void {
    localStorage.setItem('userId', userId);
  }

  getUserId(): string {
    return localStorage.getItem('userId') || '';
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}



