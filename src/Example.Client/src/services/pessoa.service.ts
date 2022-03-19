import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/models/pessoa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor(private _httpClient: HttpClient) {}

  obterPessoas(): Observable<any> {
    return this._httpClient.get<any>(`${environment.apiUrl}/pessoa`);
  }

  obterPessoaPorId(id: number): Observable<any> {
    return this._httpClient.get<any>(`${environment.apiUrl}/pessoa/${id}`);
  }

  criarPessoa(pessoa: Pessoa): Observable<any> {
    // Arrumar any
    return this._httpClient.post(`${environment.apiUrl}/pessoa`, pessoa);
  }

  editarPessoa(id: number, pessoa: Pessoa): Observable<any> {
    // Arrumar any
    return this._httpClient.put(`${environment.apiUrl}/pessoa/${id}`, pessoa);
  }

  removerPessoa(id: number): Observable<any> {
    // Arrumar any
    return this._httpClient.delete(`${environment.apiUrl}/pessoa/${id}`);
  }
}
