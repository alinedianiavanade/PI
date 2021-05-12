import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${baseUrl}/produtos`);
  }

  get(id_produto: any): Observable<Produto> {
    return this.http.get(`${baseUrl}/produto/${id_produto}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/produto`, data);
  }

  update(id_produto: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/produto/${id_produto}`, data);
  }

  delete(id_produto: any): Observable<any> {
    return this.http.delete(`${baseUrl}/produto/${id_produto}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/produtos`);
  }

  findByName(nome: any): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${baseUrl}/produto-nome?nome=${nome}`)
  }
}
