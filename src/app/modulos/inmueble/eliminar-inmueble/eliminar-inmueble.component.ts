import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleService } from 'src/app/servicios/inmueble.service';
import { ModeloDatosInmueble } from 'src/app/modelos/datosInmueble';

@Component({
  selector: 'app-eliminar-inmueble',
  templateUrl: './eliminar-inmueble.component.html',
  styleUrls: ['./eliminar-inmueble.component.css']
})
export class EliminarInmuebleComponent implements OnInit {
  id:string='';
  constructor(private inmuebleService:InmuebleService,private router :Router,private route :ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.EliminarInmueble();
  }
  EliminarInmueble(){
    this.inmuebleService.EliminarRegistroInmuebles(this.id).subscribe((datos: ModeloDatosInmueble)=>{

      alert("Se ha Eliminado el Inmueblede una manera Exitosa !!");
      this.router.navigate(["/inmueble/consultar-inmueble"]);

    }, (error :any)=>{
     alert("Disculpe ocurrio un error al momento de buscar el inmueble")
    })

  }

}
