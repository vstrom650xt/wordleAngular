// CambiarPalabra.component.ts

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-CambiarPalabra',
  templateUrl: './CambiarPalabra.component.html',
  styleUrls: ['./CambiarPalabra.component.css']
})
export class CambiarPalabraComponent implements OnInit {
  @Input() mostrar: boolean = false;
  @Output() cambiarPalabraEvent = new EventEmitter<string>();
  nuevaPalabra: string = '';

  constructor() { }

  ngOnInit() {
  }

  cambiarPalabra() {
    if (this.nuevaPalabra.trim() !== '') {
      this.cambiarPalabraEvent.emit(this.nuevaPalabra);
      this.nuevaPalabra = '';
    }
  }
}
