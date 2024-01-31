// juego.component.ts

import { Component, OnInit } from '@angular/core';
import { CambiarPalabraComponent } from '../CambiarPalabra/CambiarPalabra.component'; // Update the path

interface Intento {
  userInput: string[];
  resultado: string;
}

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  @ViewChild('cambiarPalabraRef') cambiarPalabraRef: CambiarPalabraComponent;

  palabraAAdivinar: string = ''; // Word to guess
  userInput: string[] = Array.from({ length: 25 }, () => ''); // Initialize array with 25 empty strings
  intentos: Intento[] = [];
  intentosRestantes: number = 4;

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.palabraAAdivinar = this.generarPalabra();
    this.intentos = [];
    this.userInput = Array.from({ length: 25 }, () => ''); // Reset array with 25 empty strings
    this.intentosRestantes = 4;
  }

  realizarIntento() {
    this.intentos.push({ userInput: [...this.userInput], resultado: '' });
    this.comprobarPalabra();
  }

  comprobarPalabra() {
    const palabraUsuario = this.userInput.join('').toLowerCase();
    const resultado: string[] = [];

    for (let i = 0; i < palabraUsuario.length; i++) {
      if (palabraUsuario[i] === this.palabraAAdivinar[i]) {
        resultado.push('✔');
      } else if (this.palabraAAdivinar.includes(palabraUsuario[i])) {
        resultado.push('◯');
      } else {
        resultado.push('❌');
      }
    }

    this.intentos[this.intentos.length - 1].resultado = resultado.join(' ');

    if (palabraUsuario === this.palabraAAdivinar) {
      this.mostrarMensajeGanador();
    } else if (this.intentosRestantes === 0) {
      this.mostrarMensajePerdedor();
    } else {
      this.intentosRestantes--;
    }
  }

  private generarPalabra(): string {
    const palabras = ['angular', 'typescript', 'javascript', 'react', 'vue'];
    const indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
  }

  private mostrarMensajeGanador() {
    alert('¡Felicidades! Has adivinado la palabra.');
    this.iniciarJuego();
  }

  private mostrarMensajePerdedor() {
    alert(`Lo siento, has alcanzado el límite de intentos. La palabra correcta era: ${this.palabraAAdivinar}`);
    this.iniciarJuego();
  }


getCellStyle(index: number): string {
  const userInputChar = this.userInput[index].toLowerCase();
  const correctChar = this.palabraAAdivinar[index].toLowerCase();

  if (userInputChar === correctChar) {
    return userInputChar ? 'correct' : '';
  } else if (this.palabraAAdivinar.includes(userInputChar)) {
    return userInputChar ? 'incorrect' : '';
  } else {
    return '';
  }
}


cambiarPalabra(nuevaPalabra: string) {
  this.palabraAAdivinar = nuevaPalabra;
  this.iniciarJuego();
}

// Function to trigger cambiarPalabra from CambiarPalabraComponent
cambiarPalabraDesdeComponent() {
  this.cambiarPalabraRef.cambiarPalabra();
}



}
