import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDatosInmueble } from 'src/app/modelos/datosInmueble';
import { InmuebleService } from 'src/app/servicios/inmueble.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'asesor' : ['',[Validators.required]],
    'imagen' : ['',[Validators.required]],
    'estado' : ['',[Validators.required]],
    'tipoinmueble' : ['',[Validators.required]],
    'tipoconsulta' : ['',[Validators.required]],
    'direccion' : ['',[Validators.required]],
    'valorinmueble' : ['',[Validators.required]]
  });

  states = [
    {name: 'Alquiler', value: 'Alquiler'},
    {name: 'Compra', value: 'Compra'},

  ];

  constructor(private inmuebleService:InmuebleService,private fb: FormBuilder,private router :Router ) { }


  ngOnInit(): void {
  }

  changeTipoConsulta(e) {
    this.fgValidador.controls["tipoconsulta"].setValue(e.target.value);
  }

  changeTipoInmueble(e) {
    this.fgValidador.controls["tipoinmueble"].setValue(e.target.value);
  }

  RegistrarInmueble(){
    let inmueble = new ModeloDatosInmueble();
//alert("lo invoke")
    inmueble.asesor = this.fgValidador.controls["asesor"].value;
    inmueble.direccion = this.fgValidador.controls["direccion"].value;
    inmueble.imagen = this.fgValidador.controls["imagen"].value;
    inmueble.tipoconsulta = this.fgValidador.controls["tipoconsulta"].value;
    inmueble.tipoinmueble = this.fgValidador.controls["tipoinmueble"].value;
    inmueble.estado = this.fgValidador.controls["estado"].value;
    inmueble.valorinmueble = parseInt(this.fgValidador.controls["valorinmueble"].value);

   this.inmuebleService.crearRegistroInmuebles(inmueble).subscribe((datos:any)=>{;
   alert("Se ha registrado el nuevo Inmueble Exitosamente")
   this.router.navigate(["/inmueble/consultar-inmueble"]);
 }, (error :any)=>{
  alert("Datos Invalidos")}
   )}

}
