import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-admin',
  templateUrl: './produto-admin.component.html',
  styleUrls: ['./produto-admin.component.css']
})
export class ProdutoAdminComponent implements OnInit {

  produtos?: Produto[];
  currentProduto?: Produto;
  currentIndex = -1;
  nome = '';

  constructor(private produtoService: ProdutoService) { }

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
  removeAllProdutos(): void {
    this.produtoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });

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

}
