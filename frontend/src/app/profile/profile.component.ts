import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentCliente: any;
  decoded: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentCliente = this.token.getCliente();
    var tokenDec = this.currentCliente.token
    this.decoded = jwt_decode(tokenDec);
  }

}