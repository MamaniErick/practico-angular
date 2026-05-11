import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion.models';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private inscripciones: Inscripcion[] = [];

  constructor() {}

  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  registrarInscripcion(nueva: Inscripcion) {
    this.inscripciones.push(nueva);
  }

  obtenerResumen() {
    return {
      estudiantes: this.inscripciones.filter(i => Number(i.categoriaAlumno) === 1).length,
      egresados: this.inscripciones.filter(i => Number(i.categoriaAlumno) === 2).length,
      particulares: this.inscripciones.filter(i => Number(i.categoriaAlumno) === 3).length,
      totalRecaudado: this.inscripciones.reduce((sum, i) => sum + i.precioFinal, 0)
    };
  }
}