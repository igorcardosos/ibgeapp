import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cities } from '../cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesApiService {

  constructor(private http: HttpClient) { }

  getDataFromAPI(param: string) {

    const apiUrl = `https://brasilapi.com.br/api/ibge/municipios/v1/${param}?providers=dados-abertos-br,gov,wikipedia`;

    return this.http.get<Cities[]>(apiUrl);
  }

}
