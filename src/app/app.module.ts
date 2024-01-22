import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './Bienvenido/Bienvenido.component';
import { CambiarPalabraComponent } from './CambiarPalabra/CambiarPalabra.component';
import { JuegoComponent } from './juego/juego.component';
import { GanadoComponent } from './ganado/ganado.component';
import { PerdidoComponent } from './perdido/perdido.component';

@NgModule({
  declarations: [					
    AppComponent,
      BienvenidoComponent,
      CambiarPalabraComponent,
      JuegoComponent,
      GanadoComponent,
      PerdidoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
