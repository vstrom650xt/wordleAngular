import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Bienvenido',
  templateUrl: './Bienvenido.component.html',
  styleUrls: ['./Bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  mostrarPalabra = false;
  mostrarJuego = false;
  palabraAEliminar: string = '';

  constructor() { }

  ngOnInit() {}

  irApalabra() {
    this.mostrarPalabra = !this.mostrarPalabra;
  }

  irAjuego() {
    this.mostrarJuego = !this.mostrarJuego;
  }

  cambiarPalabra(nuevaPalabra: string) {
    this.palabraAEliminar = nuevaPalabra;
    console.log(`Palabra cambiada a: ${nuevaPalabra}`);
  }
}
