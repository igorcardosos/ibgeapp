import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FedUn } from '../fed-un';

@Injectable({
  providedIn: 'root'
})
export class FedUnApiService {

  constructor(private http: HttpClient) {}
  
  getDataFromAPI() {

    const apiUrl = `https://brasilapi.com.br/api/ibge/uf/v1`;

    return this.http.get<FedUn[]>(apiUrl);
  }
}
