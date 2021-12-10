import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAsesorComponent } from '../administracion/asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from '../administracion/asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from '../administracion/asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from '../administracion/asesor/eliminar-asesor/eliminar-asesor.component';

const routes: Routes = [
  {
    path: 'crear-asesor',
    component: CrearAsesorComponent
  },
  {
    path: 'editar-asesor',
    component: EditarAsesorComponent
  },
  {
    path: 'buscar-asesor',
    component: BuscarAsesorComponent
  },
  {
    path: 'eliminar-asesor', 
    component: EliminarAsesorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
