import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Produto} from '../models/produto.model';

const baseUrl = 'http://localhost:3030/api/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }
}
