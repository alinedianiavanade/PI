import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import {PedidoService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  produtos?: Produto[];
  currentProduto?: Produto;
  currentIndex = -1;
  nome = '';


  constructor(private produtoService: ProdutoService, public pedidosService: PedidoService) { }

  ngOnInit(): void {
    this.retrieveProdutosFirst3();
  }

  retrieveProdutosFirst3(): void {
    this.produtoService.getAll()
      .subscribe(
        data => {
          this.produtos = data.slice(0, 3);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveProdutosFirst3();
    this.currentProduto = undefined;
    this.currentIndex = -1;
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
