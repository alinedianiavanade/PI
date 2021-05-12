import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    rua: '',
    cidade: '',
    estado: '',
    cep: '',

  };

  submitted = false;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  saveCliente(): void {
    const data = {
      nome: this.cliente.nome,
      email: this.cliente.email,
      senha: this.cliente.senha,
      cpf: this.cliente.cpf,
      rua: this.cliente.rua,
      cidade: this.cliente.cidade,
      estado: this.cliente.estado,
      cep: this.cliente.cep,
    };

    this.clienteService.create(data)
      .subscribe(
        response => {
          console.log(response)
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      nome: this.cliente.nome,
      email: this.cliente.email,
      senha: this.cliente.senha,
      cpf: this.cliente.cpf,
      rua: this.cliente.rua,
      cidade: this.cliente.cidade,
      estado: this.cliente.estado,
      cep: this.cliente.cep,
    };
  }

}

