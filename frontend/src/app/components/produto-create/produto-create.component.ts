import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    quantidade: '',
    descricao: '',
    preco: '',
    imgurl: '',
    id_categoria: '',
  };
  submitted = false;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }
  saveProduto(): void {
    const data = {
      nome: this.produto.nome,
      quantidade: this.produto.quantidade,
      descricao: this.produto.descricao,
      preco: this.produto.preco,
      imgurl: this.produto.imgurl,
      id_categoria: this.produto.id_categoria,
    };

    this.produtoService.create(data)
      .subscribe(
        response => {
          console.log(response)
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newProduto(): void {
    this.submitted = false;
    this.produto = {
      nome: '',
      quantidade: '',
      descricao: '',
      preco: '',
      imgurl: '',
      id_categoria: '',
    };
  }

}
