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
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';

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
    PaginaProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
