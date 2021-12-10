import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModeloDatosInmueble } from '../modelos/datosInmueble';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  url = 'http://localhost:3008';
  constructor(private router : Router,private http: HttpClient) { }

  ObtenerRegistroInmuebles(): Observable<ModeloDatosInmueble[]>{
    return this.http.get<ModeloDatosInmueble[]>(`${this.url}/inmuebles`);
   }

   ObtenerRegistroInmueblesById(id: string): Observable<ModeloDatosInmueble>{
    return this.http.get<ModeloDatosInmueble>(`${this.url}/inmuebles/${id}`);
   }

crearRegistroInmuebles(modeloDatosInmueble :ModeloDatosInmueble): Observable<ModeloDatosInmueble>{
 return this.http.post<ModeloDatosInmueble>(`${this.url}/inmuebles`, modeloDatosInmueble,{

  headers: new HttpHeaders({

  })
})
}

ActualizarRegistroInmuebles(modeloDatosInmueble :ModeloDatosInmueble): Observable<ModeloDatosInmueble>{
  return this.http.put<ModeloDatosInmueble>(`${this.url}/inmuebles/${modeloDatosInmueble.id}`, modeloDatosInmueble,{

   headers: new HttpHeaders({

   })
 })
 }

 EliminarRegistroInmuebles(id :string): Observable<any>{
  return this.http.delete(`${this.url}/inmuebles/${id}`,{

   headers: new HttpHeaders({

   })
 })
 }
}
