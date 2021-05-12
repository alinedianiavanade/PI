import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrinho } from '../models/carrinho.model';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/carrinho`, data)
  }

  delete(): Observable<any> {
    return this.http.delete(`${baseUrl}/carrinho`)
  }
  getByCliente(id_cliente: any): Observable<any> {
    return this.http.get(`${baseUrl}/carrinho/:${id_cliente}`)
  }
  update(data: any): Observable<any> {
    return this.http.put(`${baseUrl}/carrinho`, data)
  }
}