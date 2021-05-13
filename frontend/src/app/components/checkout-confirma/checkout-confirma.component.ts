import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedidos.service';
import { Carrinho } from '../../models/carrinho.model';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-checkout-confirma',
  templateUrl: './checkout-confirma.component.html',
  styleUrls: ['./checkout-confirma.component.css']
})
export class CheckoutConfirmaComponent implements OnInit {

  constructor(public pedidoService: PedidoService,public carrinhoService: CarrinhoService,) { }

  ngOnInit(): void {
  }
  removePedidos(): void {
    this.pedidoService.deleteByCliente()
      .subscribe(
        (response) => {
          this.removeCarrinho();
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  
  removeCarrinho(): void {
    this.carrinhoService.delete()
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}