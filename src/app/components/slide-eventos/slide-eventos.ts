import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-eventos.html',
  styleUrl: './slide-eventos.css',
})
export class SlideEventos {
  eventos = [
    { nombre: 'Taller de Yoga', descripcion: 'Relaja tu mente.', img: 'img/eventos/yoga.jpg' },
    { nombre: 'Charla: Ciberseguridad', descripcion: 'Protege tu entorno digital.', img: 'img/eventos/charla1.jpg' },
    { nombre: 'Taller de Powerlifting', descripcion: 'Entrena tu fuerza.', img: 'img/eventos/power.jpg' },
  ];
  indice: number = 0;

  siguiente() {
    this.indice = (this.indice + 1) % this.eventos.length;
  }

  anterior() {
    this.indice = (this.indice - 1 + this.eventos.length) % this.eventos.length;
  }
}
