import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import {PedidoService } from '../../services/pedidos.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produtos?: Produto[];
  currentProduto?: Produto;
  currentIndex = -1;
  nome = '';
  currentCliente?: Cliente;
  message = '';
  currentToken: any;
  atualizado = false;
  decoded: any;

  constructor(private produtoService: ProdutoService, public pedidosService: PedidoService, 
    private token: TokenStorageService,private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.retrieveProdutos();
    this.currentToken = this.token.getCliente();
    var tokenDec = this.currentToken.token
    this.decoded = jwt_decode(tokenDec);
    this.atualizado = false;
    this.message = '';
    this.getClienteAtual();
  }
  getClienteAtual(): void {
    this.clienteService.get()
      .subscribe(
        data => {
          this.currentCliente = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveProdutos(): void {
    this.produtoService.getAll()
      .subscribe(
        data => {
          this.produtos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveProdutos();
    this.currentProduto = undefined;
    this.currentIndex = -1;
  }
  setActiveProduto(produto: Produto, index: number): void {
    this.currentProduto = produto;
    this.currentIndex = index;
  }

  searchNome(): void {
    this.produtoService.findByName(this.nome)
      .subscribe(
        data => {
          this.produtos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  savePedido(idp:any): void {
    const data = {
      id_produto: idp, 
      id_cliente: 1,
      quantidade: 1,
  soma_produtos: 1,
  nome_produto: 'nome',
  imgurl_produto: 'url',
  preco_produto: 1.00,
  quantidade_produto: 1,
  status: false 
    }
    this.pedidosService.create(data)
    .subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error);
      });
  }


}
