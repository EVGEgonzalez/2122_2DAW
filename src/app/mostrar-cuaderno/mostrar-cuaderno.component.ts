import { Component, OnInit } from '@angular/core';
import { CuadernoService } from "../cuaderno.service";
import { environment } from './../../environments/environment';
import { CuadernoModel } from "../model/cuadernoModel";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mostrar-cuaderno',
  templateUrl: './mostrar-cuaderno.component.html',
  styleUrls: ['./mostrar-cuaderno.component.css']
})
export class MostrarCuadernoComponent implements OnInit {

  //Ajustes de las cajas de las vivencias...
  centered = false;
  disabled = false;
  unbounded = false;

  //Array con todos los datos del cuaderno...
  vivencias:any = [];

  //Variables generales del cuaderno...
  textoPortada:any = "";
  textoContraPortada:any = "";
  imagen:any = null;
  
  constructor(private cuadernoService:CuadernoService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.obtenerVivencias();
  }


  /**
   * Método que recoge la información del cuaderno, incluyendo la lista de vivencias...
   */
  obtenerVivencias() {

    //Especificamos a la API que queremos dar de alta un cuaderno, y el token se refiere a 
    //la ID del usuario
    let datos = {
      "accion": "cuaderno.listaVivencias",
    };

    this.cuadernoService.mostrarVivenciasCuaderno(`${environment.apiURL}/index.php`, JSON.stringify(datos))
    .subscribe(data => {

      console.log(data);

      this.vivencias = data;


      //Si el resultado es válido...
      if(this.vivencias.resultado != "NOK" && data.length != 0) {
        //Estos datos siempre estarán en el array 0...
        this.textoPortada = data[0].textoPortada;
        this.textoContraPortada = data[0].textoContraPortada;

        //Actualizamos la imagen con la del usuario...
        if(data[0].imagen != null) this.imagen = environment.apiURL + data[0].imagen;
        
      } else {
        console.error(data)
      }
    });
  }

  /**
   * Método que te lleva a la etapa que has hecho click...
   * @param idEtapa id de la etapa.
   */
  clickEtapa(idEtapa:any){
    console.log("Has hecho click en la vivencia con id: "+idEtapa);
  }
}
