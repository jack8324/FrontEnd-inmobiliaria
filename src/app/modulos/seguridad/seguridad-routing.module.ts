import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';

const routes: Routes = [
  {
    path: "registro-sesion",
    component:RegistroSesionComponent

  },
 {
    path: "inicio-sesion",
    component:InicioSesionComponent
  },
  {
    path: "cerrar-sesion",
    component : CerrarSesionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
