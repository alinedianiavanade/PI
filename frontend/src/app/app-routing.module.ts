import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { ContatoComponent } from './components/contato/contato.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { ProdutoAdminComponent } from './components/produto-admin/produto-admin.component';
import { ProdutoCreateComponent } from './components/produto-create/produto-create.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'loja', pathMatch: 'full' },
  { path: 'loja', component: PaginaPrincipalComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produto-info/:id', component: PaginaProdutoComponent },
  { path: 'produtos', component: ProdutoListaComponent },
  { path: 'produto/admin/add', component: ProdutoCreateComponent },
  { path: 'produtos/:id', component: ProdutoDetalhesComponent },
  { path: 'produto/admin', component: ProdutoAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'cliente', component: ProfileComponent },
  { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
