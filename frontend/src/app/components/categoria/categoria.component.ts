import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../services/categoria.service';
import {Categoria} from '../../models/categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  category: Categoria = {
    categoria: '',
  }
  submitted = false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  saveCategoria(): void {
    const data = {
      categoria: this.category.categoria
    }
    this.categoriaService.create(data)
      .subscribe(
        response => {
          console.log(response)
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newCategoria(): void {
    this.submitted = false;
    this.category = {
      categoria: '',
    };
  }
  }

