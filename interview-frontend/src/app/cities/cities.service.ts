import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) {}

  getCities() {
    return this.httpClient.get('http://localhost:3000/cities');
  }
}
