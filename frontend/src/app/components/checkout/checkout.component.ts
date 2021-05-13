import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../../models/carrinho.model';
import { CarrinhoService } from '../../services/carrinho.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carrinho: Carrinho = {
    id_cliente: '',
    valor_total: 1,
  };
  currentCliente?: Cliente;
  message = '';
  currentToken: any;
  atualizado = false;
  decoded: any;


  constructor(public carrinhoService: CarrinhoService,
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
  saveCarrinho(): void {
    const data = {
      id_cliente: this.currentCliente?.id_cliente,
      valor_total: this.carrinho.valor_total
    };
    this.carrinhoService.create(data)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
        }
      )
  };

}