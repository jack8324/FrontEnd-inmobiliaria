import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';
//Usando un BehaviorSubject para revisar el comportamiento de una variable especifica
 datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar())

//Invocamos un  cliente http que nos permita hacer solucitudes al backend a traves de una url
  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }
 VerificarSesionActual(){
   let datos = this.ObtenerInformacionSesion();
   if(datos){
     this.RefrescarDatosSesion(datos);
   }
 }
 RefrescarDatosSesion(datos:ModeloIdentificar){
  this.datosUsuarioEnSesion.next(datos);
}
 ObtenerDatosUsuarioEnSesion(){
  return this.datosUsuarioEnSesion.asObservable();
}

//un metodo identificar que recibe el usuario y la clave y retornara un observable que se comporta como una promesa,devuelve una estructura estara definina por le nombre del usuario y el token que genera
  Identificar(usuario: string,clave:string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificacionPersona`,{
      usuario : usuario,
      clave : clave
    },{
      headers: new HttpHeaders({

      })
    })
 }
 //Este metodo almacena en el localStorage=provista por el navegador los datos ingresados  por el usuario
 //Se convierte un objeto a un string JSON con stringify
 AlmacenarSesion(datos: ModeloIdentificar){
  datos.estaIdentificado = true;
  let stringDatos = JSON.stringify(datos);
  localStorage.setItem("datosSesion",stringDatos);
  this.RefrescarDatosSesion(datos);
}
//Para recuperarlos y acceder a los datos de la sesion utilizamos un metodo donde se parsea de nuevo el string a un objeto JSON
ObtenerInformacionSesion(){
  let datosString= localStorage.getItem("datosSesion");
  if(datosString){
    let datos = JSON.parse(datosString);
    return datos;
  }else{
    return null;
  }
}
//Para eliminar los datos de la sesion y  del localStorage
EliminarInformacionSesion(){
  localStorage.removeItem("datosSesion");
  this.RefrescarDatosSesion(new ModeloIdentificar());
}
 SeHaIniciadoSesion(){
  let datosString= localStorage.getItem("datosSesion");
  return datosString;
 }
}
