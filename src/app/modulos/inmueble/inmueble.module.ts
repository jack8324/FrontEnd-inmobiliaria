import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleRoutingModule } from './inmueble-routing.module';
import { CrudInmuebleComponent } from './crud-inmueble/crud-inmueble.component';
import { CrearInmuebleComponent } from './crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './editar-inmueble/editar-inmueble.component';
import { BuscarInmuebleComponent } from './buscar-inmueble/buscar-inmueble.component';
import { EliminarInmuebleComponent } from './eliminar-inmueble/eliminar-inmueble.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudInmuebleComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    BuscarInmuebleComponent,
    EliminarInmuebleComponent
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InmuebleModule { }
