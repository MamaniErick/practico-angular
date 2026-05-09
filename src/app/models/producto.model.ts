export class Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  cantidad: number;

  constructor(nombre: string, descripcion: string,
  precio: number ,imagen: string ,cantidad: number){
  this.nombre=nombre;
  this.descripcion= descripcion;
  this.precio = precio;
  this.imagen = imagen;
  this.cantidad=cantidad;
  }  
}
