import { Component, OnInit } from '@angular/core';
import { ModeloDatosInmueble } from 'src/app/modelos/datosInmueble';
import { ModeloDatosRegistro } from 'src/app/modelos/datosRegistro';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-asignar-inmueble',
  templateUrl: './crud-inmueble.component.html',
  styleUrls: ['./crud-inmueble.component.css']
})
export class CrudInmuebleComponent implements OnInit {

  listadoRegistroInmuebles: ModeloDatosInmueble[]=[];

  constructor(private inmuebleService : InmuebleService) { }

  ngOnInit(): void {
   this.ObtenerListadoRegistroInmueble();
  }
  ObtenerListadoRegistroInmueble(){
    this.inmuebleService.ObtenerRegistroInmuebles().subscribe((datos:ModeloDatosInmueble[])=>{
      this.listadoRegistroInmuebles= datos;
    })
   }

}
