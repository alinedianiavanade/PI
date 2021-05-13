import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import {PedidoService } from '../../services/pedidos.service';

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

  constructor(private produtoService: ProdutoService, public pedidosService: PedidoService) { }

  ngOnInit(): void {
    this.retrieveProdutos();
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
