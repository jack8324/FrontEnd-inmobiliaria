import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloDatosRegistro } from '../modelos/datosRegistro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  Registrar(datosRegistro:ModeloDatosRegistro): Observable<ModeloDatosRegistro>{
    return this.http.post<ModeloDatosRegistro>(`${this.url}/personas`, datosRegistro,{

      headers: new HttpHeaders({

      })
    })
 }

}
