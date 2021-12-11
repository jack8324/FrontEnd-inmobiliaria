import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BarraNavegacionComponent } from './ComponentesPrincipales/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './ComponentesPrincipales/pie-pagina/pie-pagina.component';
import { InicioComponent } from './ComponentesPrincipales/inicio/inicio.component';
import { ErrorComponent } from './ComponentesPrincipales/error/error.component';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
