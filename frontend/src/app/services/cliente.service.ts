import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${baseUrl}/clientes`);
  }

  get(id: any): Observable<Cliente> {
    return this.http.get(`${baseUrl}/cliente/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/clientes`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/cliente/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/cliente/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/clientes`);
  }

  findByName(nome: any): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${baseUrl}/cliente-nome?nome=${nome}`)
  }
}
