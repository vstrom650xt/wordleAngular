import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Bienvenido',
  templateUrl: './Bienvenido.component.html',
  styleUrls: ['./Bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  mostrarPalabra = false;
  mostrarJuego = false;
  constructor() { }
  ngOnInit() {}

  irApalabra(){
    if(this.mostrarPalabra == false){
      this.mostrarPalabra = true;
      console.log("palabra")
    }else{
      this.mostrarPalabra = false;

    }


  }

  irAjuego(){
    if(this.mostrarJuego == false){
      this.mostrarJuego = true;
      console.log("juego")
    }else{
      this.mostrarJuego = false;

    }


  }



}
