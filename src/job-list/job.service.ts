import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) {}

  getJobIds(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/jobstories.json`);
  }

  getJobDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`);
  }
}
