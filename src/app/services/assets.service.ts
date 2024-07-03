import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  private apiUrl = `${environment.apiUrl}/assets`;

  constructor(private http:HttpClient) { }

  getAssets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createAssets(assets: any): Observable<any> {
    return this.http.post(this.apiUrl, assets);
  }

  updateAssets(id: string, assets: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, assets);
  }

  deleteAssets(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }



}
