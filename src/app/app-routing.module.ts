import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './ComponentesPrincipales/error/error.component';
import { InicioComponent } from './ComponentesPrincipales/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
    {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'

    },
    {
      path:'seguridad',
      loadChildren:() => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
    },
    {
      path:'inmueble',
      loadChildren:() => import("./modulos/inmueble/inmueble.module").then(x => x.InmuebleModule)
    },

    {
     path:'**',
     component: ErrorComponent

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
