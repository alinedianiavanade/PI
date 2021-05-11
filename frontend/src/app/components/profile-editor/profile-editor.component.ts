import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

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


  constructor(private clienteService: ClienteService) { }

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



