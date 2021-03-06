import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoCreateComponent } from './components/produto-create/produto-create.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoAdminComponent } from './components/produto-admin/produto-admin.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { ContatoComponent } from './components/contato/contato.component';
import { PedidosClienteListaComponent } from './components/pedidos-cliente-lista/pedidos-cliente-lista.component';
import { ClienteDadosComponent } from './components/cliente-dados/cliente-dados.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutConfirmaComponent } from './components/checkout-confirma/checkout-confirma.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { PedidoCriarComponent } from './components/pedido-criar/pedido-criar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SobreComponent,
    ProdutoCreateComponent,
    ProdutoDetalhesComponent,
    ProdutoListaComponent,
    ProdutoAdminComponent,
    PaginaPrincipalComponent,
    LoginComponent,
    ProfileComponent,
    CadastroClienteComponent,
    PaginaProdutoComponent,
    ContatoComponent,
    PedidosClienteListaComponent,
    ClienteDadosComponent,
    CheckoutComponent,
    CheckoutConfirmaComponent,
    CarrinhoComponent,
    PedidoCriarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
