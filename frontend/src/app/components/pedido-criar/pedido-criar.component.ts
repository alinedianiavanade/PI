import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../models/pedidos.model';
import {PedidoService} from '../../services/pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../_services/token-storage.service';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import jwt_decode from 'jwt-decode';


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
  };
  enviado= false;
  currentCliente?: Cliente;
  message = '';
  currentToken: any;
  atualizado = false;
  decoded: any;

  constructor(public pedidosService:PedidoService, public route: ActivatedRoute,
    private token: TokenStorageService,private clienteService: ClienteService) { }

  ngOnInit(): void {
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
        this.enviado = true;
        console.log(response)
      },
      error => {
        console.log(error);
      });
  }

}
