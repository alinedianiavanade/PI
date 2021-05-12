import { Component, OnInit } from '@angular/core';
import {Pedido} from '../../models/pedidos.model';
import {PedidoService} from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos-cliente-lista',
  templateUrl: './pedidos-cliente-lista.component.html',
  styleUrls: ['./pedidos-cliente-lista.component.css']
})
export class PedidosClienteListaComponent implements OnInit {

  pedidos?: Pedido[];
  currentPedido?: Pedido;
  currentIndex = -1;
  id_pedido = '';
  quantidade = '';
  soma_produtos = '';
  preco_produto = '';
  quantidade_produto= '';
  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.retrievePedidos();
  }

  retrievePedidos(): void {
    this.pedidoService.getByCliente()
    .subscribe(
      data => {
      this.pedidos = data;
      console.log(data)
    },
    error => {
      console.log(error)
    }
    )
  }

  refreshList(): void {
    this.retrievePedidos();
    this.currentPedido = undefined;
    this.currentIndex = -1;
  }

  setActivePedido(pedido: Pedido, index: number): void {
    this.currentPedido = pedido;
    this.currentIndex = index;
  }
  removePedido(): void {
    this.pedidoService.delete(this.currentPedido?.id_pedido)
    .subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  aumentaQuantidade(id_pedido: any): void {
    if (this.currentPedido?.quantidade < this.currentPedido?.quantidade_produto) {
      id_pedido = this.currentPedido?.id_pedido
    const data ={
      quantidade: this.currentPedido?.quantidade + 1,
      soma_produtos: (this.currentPedido?.quantidade + 1) * this.currentPedido?.preco_produto
    }
    this.pedidoService.update(this.currentPedido?.id_pedido, data)
    .subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
    }
  }
  diminuiQuantidade(id_pedido: any): void {
    if(this.currentPedido?.quantidade > 1){
    id_pedido = this.currentPedido?.id_pedido
    const data ={
      quantidade: this.currentPedido?.quantidade - 1,
      soma_produtos: (this.currentPedido?.quantidade - 1) * this.currentPedido?.preco_produto
    }
    this.pedidoService.update(this.currentPedido?.id_pedido, data)
    .subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  else {
    this.removePedido()
  }
}

  
  total() {
    var total = 0;
     if(this.pedidos){
       for(let i = 0; i < this.pedidos?.length; i++) {
         const p = this.pedidos[i];
         total = total + parseFloat(p.soma_produtos);
       }
     }
     const valor_total = total.toFixed(2)
     return valor_total;  
    }

    ativaERemove(pedido: Pedido, index: number): void {
      this.currentPedido = pedido;
      this.currentIndex = index;
      this.removePedido()
    }
    ativaEAumenta(pedido: Pedido, index: number): void {
      this.currentPedido = pedido;
      this.currentIndex = index;
      this.aumentaQuantidade(this.id_pedido)
    }
    ativaEDiminui(pedido: Pedido, index: number): void {
      this.currentPedido = pedido;
      this.currentIndex = index;
      this.diminuiQuantidade(this.id_pedido)
    }
   
  }
 