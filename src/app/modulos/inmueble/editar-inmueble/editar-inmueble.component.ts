import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
import { ModeloDatosInmueble } from 'src/app/modelos/datosInmueble';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {
  id:string='';
  fgValidador: FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'asesor' : ['',[Validators.required]],
    'direccion' : ['',[Validators.required]],
    'imagen' : ['',[Validators.required]],
    'tipoconsulta' : ['',[Validators.required]],
    'tipoinmueble' : ['',[Validators.required]],
    'estado' : ['',[Validators.required]],
    'valorinmueble' : ['',[Validators.required]],
  });

  constructor(private inmuebleService:InmuebleService,private fb: FormBuilder,private router :Router,private route :ActivatedRoute ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarInmueble();
  }

  BuscarInmueble(){
    this.inmuebleService.ObtenerRegistroInmueblesById(this.id).subscribe((datos: ModeloDatosInmueble)=>{

      this.fgValidador.controls["id"].setValue(datos.id);

      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["asesor"].setValue(datos.asesor);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
      this.fgValidador.controls["tipoconsulta"].setValue(datos.tipoconsulta);
      this.fgValidador.controls["tipoinmueble"].setValue(datos.tipoinmueble);
      this.fgValidador.controls["valorinmueble"].setValue(datos.valorinmueble);

    }, (error :any)=>{
     alert("Disculpe ocurrio un error al momento de buscar el inmueble")
    })
 }

  ActualizarInmueble(){
    let inmueble = new ModeloDatosInmueble();
    inmueble.id = this.fgValidador.controls["id"].value;
    inmueble.asesor = this.fgValidador.controls["asesor"].value;
    inmueble.direccion = this.fgValidador.controls["direccion"].value;
    inmueble.imagen = this.fgValidador.controls["imagen"].value;
    inmueble.tipoconsulta = this.fgValidador.controls["tipoconsulta"].value;
    inmueble.tipoinmueble = this.fgValidador.controls["tipoinmueble"].value;
    inmueble.estado = this.fgValidador.controls["estado"].value;
    inmueble.valorinmueble = parseInt(this.fgValidador.controls["valorinmueble"].value);
   // personas.direccion = this.fgValidador.controls["direccion"].value;
   this.inmuebleService.ActualizarRegistroInmuebles(inmueble).subscribe((datos:any)=>{
   alert("Se ha Actualizado Inmueble Exitosamente")
   this.router.navigate(["/inmueble/consultar-inmueble"]);
 }, (error :any)=>{
  alert("Datos Invalidos")}
   )}

}



