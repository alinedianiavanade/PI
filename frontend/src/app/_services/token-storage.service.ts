import { Injectable } from '@angular/core';
import * as jwt from '../_helpers/auth.interceptor';

const TOKEN_KEY = 'auth-token';
const CLIENTE_KEY = 'auth-cliente';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }


  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveCliente(id: any): void {
    window.sessionStorage.removeItem(CLIENTE_KEY);
    window.sessionStorage.setItem(CLIENTE_KEY, JSON.stringify(id));
  }

  public getCliente(): any {
    const cliente = window.sessionStorage.getItem(CLIENTE_KEY);
    if (cliente) {
      return JSON.parse(cliente);
    }


    return {};
  }

}
