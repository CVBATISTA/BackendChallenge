import { Cidade } from 'src/models/cidade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  constructor(private _httpClient: HttpClient) {}

  obterCidades(): Observable<any> {
    return this._httpClient.get<any>(`${environment.apiUrl}/cidade`);
  }

  obterCidadePorId(id: number): Observable<any> {
    return this._httpClient.get<any>(`${environment.apiUrl}/cidade/${id}`);
  }

  criarCidade(cidade: Cidade): Observable<any> {
    // Arrumar any
    return this._httpClient.post(`${environment.apiUrl}/cidade`, cidade);
  }

  editarCidade(id: number, cidade: Cidade): Observable<any> {
    // Arrumar any
    return this._httpClient.put(`${environment.apiUrl}/cidade/${id}`, cidade);
  }

  removerCidade(id: number): Observable<any> {
    // Arrumar any
    return this._httpClient.delete(`${environment.apiUrl}/cidade/${id}`);
  }
}
