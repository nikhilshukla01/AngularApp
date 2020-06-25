import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseURL = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<ListService>(`${this.baseURL}/`);
  }

}
