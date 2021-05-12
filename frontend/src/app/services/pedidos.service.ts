import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedidos.model';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(public http: HttpClient) { }

  getByCliente(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${baseUrl}/pedidos-cliente`)
  };

  update(id_pedido: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/pedidos/${id_pedido}`, data)
  }
  findById(id_pedido: any): Observable<Pedido> {
    return this.http.get(`${baseUrl}/busca-pedidos/${id_pedido}`)
  };

  delete(id_pedido: any): Observable<any> {
    return this.http.delete(`${baseUrl}/pedidos/${id_pedido}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/pedidos`, data)
  }
  deleteByCliente(): Observable<any> {
    return this.http.delete(`${baseUrl}/pedidos-cliente`)
  }

}