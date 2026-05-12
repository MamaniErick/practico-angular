import { Component, inject } from '@angular/core';
import { JuegoService } from '../../services/juego.service';
import { CartaModel } from '../../models/carta.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-juego-memoria',
  imports: [CommonModule],
  templateUrl: './juego-memoria.html',
  styleUrl: './juego-memoria.css',
})
export class JuegoMemoria {
  public juegoService = inject(JuegoService);
  cartas: CartaModel[] = [];

  ngOnInit() {
    this.juegoService.iniciarJuego();

    this.cartas = this.juegoService.mezclar(this.juegoService.cartas);
    console.log(this.cartas);
  }
  seleccionarCarta(carta: CartaModel) {
    this.juegoService.seleccionarCarta(carta);
  }
  iniciarJuego() {
    this.juegoService.iniciarJuego();
  }
  mesclar() {
    this.juegoService.mezclar(this.juegoService.cartas);
  }

  compararCartas() {
    this.juegoService.compararCartas();
  }
  reiniciarTurno() {
    this.juegoService.reiniciarTurno();
  }
}
