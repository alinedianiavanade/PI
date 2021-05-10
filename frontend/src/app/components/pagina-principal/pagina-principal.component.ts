import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

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


  constructor(private produtoService: ProdutoService) { }

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

}
