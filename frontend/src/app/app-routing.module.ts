import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PedidosClienteListaComponent } from './components/pedidos-cliente-lista/pedidos-cliente-lista.component';
import { ProdutoAdminComponent } from './components/produto-admin/produto-admin.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { CheckoutConfirmaComponent } from './components/checkout-confirma/checkout-confirma.component'

import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  { path: 'sobre', component: SobreComponent },
  { path: 'produtos', component: ProdutoListaComponent },
  { path: 'produtos/:id', component: ProdutoDetalhesComponent },
  { path: 'produto/admin', component: ProdutoAdminComponent },
  { path: 'pedidos-cliente/:id_cliente', component: PedidosClienteListaComponent },
  { path: 'carrinho/:id_cliente', component: CarrinhoComponent},
  { path: 'categoria', component:CategoriaComponent},
  { path: 'checkout', component: CheckoutConfirmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
