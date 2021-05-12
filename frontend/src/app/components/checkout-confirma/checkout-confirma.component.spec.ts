import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutConfirmaComponent } from './checkout-confirma.component';

describe('CheckoutConfirmaComponent', () => {
  let component: CheckoutConfirmaComponent;
  let fixture: ComponentFixture<CheckoutConfirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutConfirmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutConfirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
