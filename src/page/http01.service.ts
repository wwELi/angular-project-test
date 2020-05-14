import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Http01Service {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get('/api/products')
  }

}
