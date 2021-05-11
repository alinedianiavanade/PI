import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {
  currentProduto: Produto = {
    nome: '',
    quantidade: '',
    descricao: '',
    preco: '',
    imgurl: '',
    id_categoria: '',
  };

  message = '';
  atualizado = false;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '',
      this.getProduto(this.route.snapshot.params.id);
  }

  getProduto(id: string): void {
    this.produtoService.get(id)
      .subscribe(
        data => {
          this.currentProduto = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateProduto(): void {
    this.produtoService.update(this.currentProduto.id, this.currentProduto)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Atualizado com sucesso';
          this.atualizado = true;
        },
        error => {
          console.log(error);
        });
  }
  deleteProduto(): void {
    this.produtoService.delete(this.currentProduto.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/produto/admin']);
        },
        error => {
          console.log(error);
        });
  }

}