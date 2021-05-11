import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoAdminComponent } from './components/produto-admin/produto-admin.component';
import { ProdutoCreateComponent } from './components/produto-create/produto-create.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component'

const routes: Routes = [
  { path: 'sobre', component: SobreComponent },
  { path: 'cadastro', component: ProfileEditorComponent },
  { path: 'produtos', component: ProdutoListaComponent },
  { path: 'produto/admin/add', component: ProdutoCreateComponent },
  { path: 'produtos/:id', component: ProdutoDetalhesComponent },
  { path: 'produto/admin', component: ProdutoAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
