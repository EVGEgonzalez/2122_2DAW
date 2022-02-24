import { Component, OnInit } from '@angular/core';
import { CuadernoService } from "../cuaderno.service";
import { environment } from './../../environments/environment';
import { CuadernoModel } from "../model/cuadernoModel";

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
  //no funciona así, ¿no es capaz de asignar los datos al modelo?
  //vivencias:Array<CuadernoModel> = [];
  textoPortada:any = "test";
  textoContraPortada:any = "";
  imagen:String = "";
  
  constructor(private cuadernoService:CuadernoService) { }

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
      "token": 1
    };

    this.cuadernoService.mostrarVivenciasCuaderno(`${environment.apiURL}/backend/API/chooseService.php`, JSON.stringify(datos))
    .subscribe(data => {
      //this.vivencias.push(data);

      this.textoPortada = data.textoContraPortada;
      this.textoContraPortada = data.textoContraPortada;
      this.imagen = data.imagenPortada;

      this.vivencias = data;

      console.log(this.vivencias);

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
