import { Component, OnInit } from '@angular/core';
import {Carrinho} from '../../models/carrinho.model';
import {CarrinhoService} from '../../services/carrinho.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  carrinho: Carrinho = {
    id_cliente: '1',
    valor_total: 1,
  }

  constructor(public carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
  }
  saveCarrinho(): void {
    const data = {
      id_cliente: this.carrinho.id_cliente,
      valor_total: this.carrinho.valor_total
    };
     this.carrinhoService.create(data)
  .subscribe(
    response => {
      console.log(response)
      this.removeCarrinho()
    },
    error => {
      console.log(error);
    }
  )
  };
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
