import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Footballers } from '../interfaces/footballers';

@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  list = new BehaviorSubject<Footballers[]>([]);
  url: string = 'http://localhost:8080/lab1/Servlet1';

  constructor(private http: HttpClient) {}
  getFootballers(): Observable<Footballers[]> {
    return this.http.get<Footballers[]>(this.url);
  }

  postFootballers(footballer: Footballers): Observable<Footballers[]> {
    return this.http.post<Footballers[]>(this.url, footballer);
  }
  putFootballers(footballer: Footballers): Observable<Footballers[]> {
    return this.http.put<Footballers[]>(
      this.url + '/' + footballer.id,
      footballer
    );
  }
  deleteFootballers(footballer: Footballers): Observable<Footballers[]> {
    return this.http.delete<Footballers[]>(this.url + '/' + footballer.id);
  }
  setList(list: Footballers[]) {
    this.list.next(list);
  }
}
