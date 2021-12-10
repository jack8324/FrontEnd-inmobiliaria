import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorVentasComponent } from './asesor-ventas/asesor-ventas.component';


@NgModule({
  declarations: [AsesorVentasComponent],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
