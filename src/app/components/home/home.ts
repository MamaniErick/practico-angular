import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  secciones = [
    {
      titulo: 'Slide de Eventos',
      descripcion:
        'Visualizador dinamico de eventos con fotografias descriptivas y controles de navegacion.',
      ruta: '/slide-eventos',
      icono: 'bi-images',
    },
    {
      titulo: 'Catalogo de Eventos',
      descripcion:
        'Listado de productos destacados con gestion de carrito de compras y vista de resumen en modal',
      ruta: 'productos-carrito',
      icono: 'bi-cart-fill',
    },
    {
      titulo: 'Juego de Memoria',
      descripcion: 'Desafio interactivo de 12 cartas para encontrar parejas.',
      ruta: 'juego-memoria',
      icono: 'bi-grid-3x3-gap',
    },
  ];
}
