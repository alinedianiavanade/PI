import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClienteListaComponent } from './pedidos-cliente-lista.component';

describe('PedidosClienteListaComponent', () => {
  let component: PedidosClienteListaComponent;
  let fixture: ComponentFixture<PedidosClienteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosClienteListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClienteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
