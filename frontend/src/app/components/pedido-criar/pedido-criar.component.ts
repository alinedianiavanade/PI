import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../models/pedidos.model';
import {PedidoService} from '../../services/pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido-criar',
  templateUrl: './pedido-criar.component.html',
  styleUrls: ['./pedido-criar.component.css']
})
export class PedidoCriarComponent implements OnInit {

  pedido: Pedido = {
    status: false, 
    soma_produtos: 1, 
    id_cliente: 1, 
    id_produto: 1, 
    quantidade: 1,
    nome_produto: '',
    preco_produto: 1.00,
    imgurl_produto: '',
    id_pedido: 1,
    quantidade_produto: 1,
  }

  constructor(public pedidosService:PedidoService, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  savePedido(): void {
    const data = {
      id_produto: this.route.snapshot.params.id, 
      id_cliente: 1,
      quantidade: 1,
  soma_produtos: 1,
  nome_produto: this.route.snapshot.params.nome,
  imgurl_produto: this.route.snapshot.params.imgurl,
  preco_produto: this.route.snapshot.params.preco,
  quantidade_produto: this.route.snapshot.params.quantidade,
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
