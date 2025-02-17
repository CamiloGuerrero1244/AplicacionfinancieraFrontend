import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl=`${environment.apiUrl}/users`;

  constructor(private http:HttpClient) { }

  register(user: { 
    identification: number, 
    name: string, 
    lastname: string, 
    phone: string, 
    email: string, 
    password: string, 
    rol:string,
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }


}
