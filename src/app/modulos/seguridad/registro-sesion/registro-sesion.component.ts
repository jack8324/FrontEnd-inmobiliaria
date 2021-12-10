import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDatosRegistro } from 'src/app/modelos/datosRegistro';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'correo':['',[Validators.required,Validators.email] ],
    'nombres' : ['',[Validators.required]],
    'apellidos' : ['',[Validators.required]],
    'celular' : ['',[Validators.required]],
    'direccion' : ['',[Validators.required]]
  });
  constructor(private registrarServicio:RegistroService,private fb: FormBuilder,private router :Router ) { }

  ngOnInit(): void {
  }
  registarUsuario(){
    let personas = new ModeloDatosRegistro();
    personas.correo = this.fgValidador.controls["correo"].value;
    personas.nombres = this.fgValidador.controls["nombres"].value;
    personas.apellidos = this.fgValidador.controls["apellidos"].value;
    personas.celular = this.fgValidador.controls["celular"].value;
   // personas.direccion = this.fgValidador.controls["direccion"].value;
   this.registrarServicio.Registrar(personas).subscribe((datos:any)=>{;
   alert("Se ha registrado Exitosamente")
  this.router.navigate(["/inicio"]);
 }, (error :any)=>{
  alert("Datos Invalidos")}
   )}

}
