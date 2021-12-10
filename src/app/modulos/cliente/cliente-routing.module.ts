import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from '../administracion/clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from '../administracion/clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from '../administracion/clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from '../administracion/clientes/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [

  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'eliminar-cliente', 
    component: EliminarClienteComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
