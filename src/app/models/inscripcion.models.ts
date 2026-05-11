export interface Inscripcion {
  dni: string;
  precio: number;
  categoriaAlumno: number; // 1=Estudiante, 2=Egresado y 3=Particular
  fechaInscripcion: Date;
  email: string;
  curso: string;
  precioFinal: number; 
}
