import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root' 
})
export class CarritoService {
  private listaCarrito: Producto[] = [];

  constructor() {}

  getCarrito() {
    return this.listaCarrito;
  }

  agregarProducto(producto: Producto) {
    const item = this.listaCarrito.find(p => p.nombre === producto.nombre);
    if (item) {
      item.cantidad++;
    } else {
      this.listaCarrito.push({ ...producto, cantidad: 1 });
    }
  }

  quitarProducto(producto: Producto) {
    const index = this.listaCarrito.findIndex(p => p.nombre === producto.nombre);
    if (index !== -1) {
      if (this.listaCarrito[index].cantidad > 1) {
        this.listaCarrito[index].cantidad--;
      } else {
        this.listaCarrito.splice(index, 1);
      }
    }
  }

  eliminarProducto(producto: Producto) {
    const index = this.listaCarrito.findIndex(p => p.nombre === producto.nombre);
        this.listaCarrito.splice(index, 1);
  }

  obtenerTotal() {
    return this.listaCarrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  }

  limpiarCarrito() {
    this.listaCarrito = [];
    return this.listaCarrito;
  }
}
