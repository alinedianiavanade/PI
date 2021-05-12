import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {
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
    this.produtoService.update(this.currentProduto.id_produto, this.currentProduto)
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
    this.produtoService.delete(this.currentProduto.id_produto)
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
