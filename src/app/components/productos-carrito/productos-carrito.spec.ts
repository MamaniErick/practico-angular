import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCarrito } from './productos-carrito';

describe('ProductosCarrito', () => {
  let component: ProductosCarrito;
  let fixture: ComponentFixture<ProductosCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosCarrito],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosCarrito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
