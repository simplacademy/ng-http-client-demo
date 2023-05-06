import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from './config';
import { Country } from './model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  service: string = "/countries";

  constructor(private http: HttpClient) { }

  list(): Observable<Country[]> {
    return this.http.get<Country[]>(`${baseURL}${this.service}`);
  }

  getById(id: number): Observable<Country> {
    return this.http.get<Country>(`${baseURL}${this.service}/${id}`);
  }

  add(country: Country): Observable<any> {
    return this.http.post(`${baseURL}${this.service}`, country, 
      { headers: { "content-type": "application/json" } });
  }

  update(country: Country): Observable<any> {
    return this.http.put(`${baseURL}${this.service}/${country.id}`, country, 
      { headers: { "content-type": "application/json" } });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseURL}${this.service}/${id}`);
  }
}
