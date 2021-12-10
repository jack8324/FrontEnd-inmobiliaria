import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
//un validador de tipo forgroup  que generara un nuevo grupo de controles para validar entre la vista y la logica de componentes
  fgValidador: FormGroup = this.fb.group({
    'usuario':['',[Validators.required,Validators.email] ],
    'clave' : ['',[Validators.required]]

  });
// Inyectamos en el constructor un formBuilder que nos permtira validar los formularios de la interfaz
  constructor(private fb: FormBuilder, private servicioSeguridad : SeguridadService,private router: Router) { }

  ngOnInit(): void {}
//Validar los datos ingresados por el usuario
  IdentificarUsuario(){
let usuario = this.fgValidador.controls["usuario"].value;
let clave= this.fgValidador.controls["clave"].value;
//Utilizamos una libreria para encriptar o cifrar  la clave para enviarlo al back

let claveCifrada = cryptoJS.MD5(clave).toString();

this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any)=>{
//Hay que almacenar de alguna manera los datos de la sesion
this.servicioSeguridad.AlmacenarSesion(datos);
  alert("Datos correctos")
  this.router.navigate(["/inicio"]);
}, (error :any)=>{


  alert("Datos Invalidos")
})
  }
}
