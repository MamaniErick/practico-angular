import { CartaType } from './enums/carta.type';

export class CartaModel {
  type: CartaType;
  position: number;
  descubierto: boolean;
  seleccionada: boolean;
  icon: string; // propiedad para almacenar la clase del icono
  constructor(type: CartaType, position: number) {
    this.type = type;
    this.position = position;
    this.descubierto = false;
    this.seleccionada = false;
    this.icon = this.getIconClass(type); // Asignar el icono al crear la carta
  }

  // Método para obtener la clase de icono según el tipo de carta
  private getIconClass(type: CartaType): string {
    switch (type) {
      case CartaType.flor:
        return 'bi-flower1';
      case CartaType.manzana:
        return 'bi-apple';
      case CartaType.banana:
        return 'bi-gem'; // Usamos un icono genérico o un placeholder
      case CartaType.triangulo:
        return 'bi-triangle-fill';
      case CartaType.pera:
        return 'bi-heart-fill'; // Usamos un icono genérico o un placeholder
      case CartaType.cuadrado:
        return 'bi-square-fill';
      default:
        return 'bi-question-circle-fill'; // Icono por defecto si no se encuentra el tipo
    }
  }
}
