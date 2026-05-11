import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Inscripcion } from '../../models/inscripcion.models';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripciones.html'
})
export class InscripcionesComponent {
  private inscripcionService = inject(InscripcionService);

  nuevaInscripcion: Inscripcion = this.reiniciarForm();

  calcularTotal(): number {
    let descuento = 0;
    const categoria = Number(this.nuevaInscripcion.categoriaAlumno);
    
    if (categoria === 1) descuento = 0.35; 
    else if (categoria === 2) descuento = 0.50; 
    
    return this.nuevaInscripcion.precio * (1 - descuento);
  }

  registrar() {
    
    if (this.nuevaInscripcion.dni && this.nuevaInscripcion.precio > 0) {
      this.nuevaInscripcion.precioFinal = this.calcularTotal();
      this.nuevaInscripcion.fechaInscripcion = new Date();
      this.inscripcionService.registrarInscripcion({...this.nuevaInscripcion});
      this.nuevaInscripcion = this.reiniciarForm();
    } else {
      alert("Por favor complete los campos obligatorios.");
    } 
  }

  get lista() { return this.inscripcionService.getInscripciones(); }
  get resumen() { return this.inscripcionService.obtenerResumen(); }

  private reiniciarForm(): Inscripcion {
    return { 
      dni: '', 
      precio: 0, 
      categoriaAlumno: 0, 
      fechaInscripcion: new Date(), 
      email: '', 
      curso: '', 
      precioFinal: 0 
    };
  }
}
