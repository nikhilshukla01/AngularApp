import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseURL = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<AppService>(`${this.baseURL}/`);
  }

  findFeatures(feature: string) {
    return this.http.get<AppService>(`${this.baseURL}/${feature}`);
  }

}
