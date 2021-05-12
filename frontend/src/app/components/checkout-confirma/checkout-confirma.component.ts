import { Component, OnInit } from '@angular/core';
import {PedidoService} from '../../services/pedidos.service';

@Component({
  selector: 'app-checkout-confirma',
  templateUrl: './checkout-confirma.component.html',
  styleUrls: ['./checkout-confirma.component.css']
})
export class CheckoutConfirmaComponent implements OnInit {

  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
  }
  removePedidos(): void {
    this.pedidoService.deleteByCliente()
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
