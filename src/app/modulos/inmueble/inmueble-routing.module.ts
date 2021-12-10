import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { CrudInmuebleComponent } from './crud-inmueble/crud-inmueble.component';
import { EditarInmuebleComponent } from './editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './eliminar-inmueble/eliminar-inmueble.component';

const routes: Routes = [
  {
    path: 'consultar-inmueble',
    component: CrudInmuebleComponent
  },
  {
    path: 'editar-inmueble/:id',
    component: EditarInmuebleComponent
  },
  {
    path: 'crear-inmueble',
    component: CrearInmuebleComponent
  },
  {
    path: 'eliminar-inmueble/:id',
    component:EliminarInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
