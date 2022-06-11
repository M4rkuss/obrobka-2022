import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Footballers } from '../interfaces/footballers';
@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  url: string = 'http://localhost:8080/lab1/Servlet1';

  setService1Service: any;

  constructor(private http: HttpClient) {}
  getFootballers(): Observable<Footballers[]> {
    return this.http.get<Footballers[]>(this.url);
  }

  setFootballers(params: any): Observable<Object> {
    return this.http.put(this.url, {}, { params: params });
  }
}
