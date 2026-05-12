import { Injectable } from '@angular/core';
import { CartaModel } from '../models/carta.model';
import { CartaType } from '../models/enums/carta.type';
@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  cartas: CartaModel[] = [];

  primeraCarta!: CartaModel;

  segundaCarta!: CartaModel;

  // bloquear: boolean = false;

  intentos: number = 10;

  puedeJugar: boolean = false; // El jugador debe presionar "INTENTAR" para empezar

  juegoTerminado: boolean = false;

  parejasEncontradas: number = 0;

  constructor() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    // Reiniciar estados globales
    this.intentos = 8;
    this.parejasEncontradas = 0;
    this.juegoTerminado = false;
    this.puedeJugar = false;
    this.primeraCarta = null!;
    this.segundaCarta = null!; // Asegurarse de que las cartas seleccionadas se reinicien

    let tipos = [
      CartaType.flor,
      CartaType.manzana,
      CartaType.banana,
      CartaType.triangulo,
      CartaType.pera,
      CartaType.cuadrado,
    ];

    let todas: CartaModel[] = [];

    let posicion = 0;

    tipos.forEach((tipo) => {
      todas.push(new CartaModel(tipo, posicion++));
      todas.push(new CartaModel(tipo, posicion++));
    });
    this.cartas = []; // Limpiar el array de cartas antes de rellenarlo

    this.cartas = this.mezclar(todas);
  }

  mezclar(cartas: CartaModel[]): CartaModel[] {
    return cartas.sort(() => Math.random() - 0.5);
  }
  habilitarIntento() {
    if (this.juegoTerminado) {
      this.iniciarJuego(); // Reiniciar el juego si ya terminó
    }

    if (this.intentos > 0 && !this.juegoTerminado) {
      this.puedeJugar = true;
    }
  }
  seleccionarCarta(carta: CartaModel) {
    console.log({
      carta,
      puedeJugar: this.puedeJugar,
      descubierto: carta.descubierto,
      seleccionado: carta.seleccionada,
      juegoTerminado: this.juegoTerminado,
    });
    if (!this.puedeJugar || carta.descubierto || carta.seleccionada || this.juegoTerminado) {
      return;
    }

    carta.seleccionada = true;

    if (!this.primeraCarta) {
      this.primeraCarta = carta;
    } else {
      this.segundaCarta = carta;
      this.puedeJugar = false; // Bloqueamos más clics hasta comparar

      this.compararCartas();
    }
  }

  compararCartas() {
    // this.bloquear = true;

    if (this.primeraCarta.type === this.segundaCarta.type) {
      this.primeraCarta.descubierto = true;

      this.segundaCarta.descubierto = true;

      this.parejasEncontradas++;

      if (this.parejasEncontradas === 6) {
        this.juegoTerminado = true;

        alert('🎉 GANASTE');
      }

      this.reiniciarTurno();
    } else {
      this.intentos--;

      setTimeout(() => {
        this.primeraCarta.seleccionada = false;

        this.segundaCarta.seleccionada = false;

        if (this.intentos <= 0) {
          this.juegoTerminado = true;

          alert('❌ PERDISTE');
        }

        this.reiniciarTurno();
      }, 1000);
    }
  }

  reiniciarTurno() {
    this.primeraCarta = null!;

    this.segundaCarta = null!;

    // this.bloquear = false;

    this.puedeJugar = false; // Requiere presionar "INTENTAR" de nuevo
  }
}
