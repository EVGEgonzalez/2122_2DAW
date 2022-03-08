import { Component, OnInit } from '@angular/core';
import { Vivencia } from '../vivencia';
import { VivenciasService } from '../vivencias.service';


@Component({
  selector: 'altaVivencia',
  templateUrl: './alta-vivencias.component.html',
  styleUrls: ['./alta-vivencias.component.css']
})

export class AltaVivenciasComponent implements OnInit {
  selectedFile: Array<any> = [];
  /**Objero Vivencias donde se meterán los datos del formulario */
  vivencia: Vivencia = {
    idVivencia:0,
    etapa: 0,
    descripcion: "descripcion1",
    imagen: null
  }
/** Variable listado */
jsonListar = {
    accion: 'vivencias.listarEtapas',
    token: "identificación del usuario",
  }
  /** Objeto json para pasar al php*/
  json = {
    accion: 'vivencias.alta',
    token: "identificación del usuario",
    datos: {
      idEtapa: this.vivencia.etapa,
      texto: this.vivencia.descripcion,
      foto: this.selectedFile
    }
  }
  /** @param vivenciasServicio que instacia la clase que está en vivencias.service.ts  */
  constructor(private vivenciasServicio: VivenciasService) { }

  etapas = []
  estado?: boolean
  altaVivencia=[]

  ngOnInit(): void {
    this.vivenciasServicio.enviar(JSON.stringify(this.jsonListar))
      .subscribe(resultado => {
        this.etapas = resultado
        console.log(resultado);
      })
  }
  /**
   * Funcion enviar() para enviar el json al archivo php
   * @param url Será el archivo php al que voy a llamar
   */
  enviar(): void {
    console.log('tron1');
    //let json = '{"accion":"vivencias.alta","token":"identificación del usuario","datos":{"idEtapa":' + this.vivencia.etapa + ',"texto":' + this.vivencia.descripcion + ',"foto":' + this.vivencia.imagen + '}}'
    console.log(JSON.stringify(this.json));

    this.vivenciasServicio.enviar(JSON.stringify(this.json))
      .subscribe(resultado =>{
        this.altaVivencia = resultado;
        console.log(`Se han enviado los datos ${resultado}`);
        //this.estado = this.altaVivencia[0]['estado'];
      })
      console.log("ee"+this.selectedFile);
  }

  procesarImagen(image:any) {

    let file: any = null;

    //Recorremos todas las posibles imagenes multiples y las convertimos a base 64
    for(let imagen of image.files) {
    //for(let i = 0; i<image.files.size; i++) {
      file = File = imagen;

      const reader = new FileReader()

      reader.addEventListener('load', (event: any) => {
        console.log("aaa");
        
        file.text().then( () => {
          this.selectedFile.push(reader.result);
        });

        console.log(this.selectedFile);
      });

      reader.readAsDataURL(file);
    }
  }
}
