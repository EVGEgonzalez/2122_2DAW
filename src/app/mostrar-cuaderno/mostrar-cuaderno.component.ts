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

  textoPortada:any = "";
  textoContraPortada:any = "";
  imagen:any = "";
  
  constructor(private cuadernoService:CuadernoService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.obtenerVivencias();
  }


  /**
   * Método que recoge la información del cuaderno, incluyendo la lista de vivencias...
   */
  obtenerVivencias() {

    //Especificamos a la API que queremos dar de alta un cuaderno, y el token se refiere a 
    //la ID del cuaderno
    let datos = {
      "accion": "cuaderno.listaVivencias",
      "token": 4
    };

    this.cuadernoService.mostrarVivenciasCuaderno(`${environment.apiURL}/backend/API/chooseService.php`, JSON.stringify(datos))
    .subscribe(data => {

      console.log(data);

      this.vivencias = data;

      //Si el resultado es válido...
      if(this.vivencias.resultado != "NOK") {
        //Estos datos siempre estarán en el array 0...
        this.textoPortada = data[0].textoPortada;
        this.textoContraPortada = data[0].textoContraPortada;
        this.imagen = data[0].imagen;

        //Si no viene ninguna imagen, ni la convertimos...
        if(this.imagen != null)
          this.imagen = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' 
                  + this.vivencias.imagen.base64string);

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
