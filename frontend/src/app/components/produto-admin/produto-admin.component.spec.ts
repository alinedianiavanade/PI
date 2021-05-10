import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAdminComponent } from './produto-admin.component';

describe('ProdutoAdminComponent', () => {
  let component: ProdutoAdminComponent;
  let fixture: ComponentFixture<ProdutoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
