import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-cliente-dados',
  templateUrl: './cliente-dados.component.html',
  styleUrls: ['./cliente-dados.component.css']
})
export class ClienteDadosComponent implements OnInit {

  currentCliente: Cliente = {
    nome: '',
    email: '',
    rua: '',
    cidade: '',
    estado: '',
    cep: '',
    cpf: '',
  };

  message = '';
  currentToken: any;
  atualizado = false;
  decoded: any;
  
  constructor(private token: TokenStorageService,private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.currentToken = this.token.getCliente();
    var tokenDec = this.currentToken.token
    this.decoded = jwt_decode(tokenDec);
    this.atualizado = false;
    this.message = '';
    this.getClienteAtual();
  }
  getClienteAtual(): void {
    this.clienteService.get()
      .subscribe(
        data => {
          this.currentCliente = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}