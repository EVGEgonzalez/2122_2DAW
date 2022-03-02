import { Component, OnInit } from '@angular/core';
import { Vivencia } from '../vivencia';
import { Etapas } from '../etapas';
import { ETAPAS } from '../mock-etapas';
import { VivenciasService } from '../vivencias.service';


@Component({
  selector: 'altaVivencia',
  templateUrl: './alta-vivencias.component.html',
  styleUrls: ['./alta-vivencias.component.css']
})

export class AltaVivenciasComponent implements OnInit {
  /**Objero Vivencias donde se meterán los datos del formulario */
  vivencia: Vivencia = {
    idVivencia:0,
    etapa: 0,
    descripcion: "descripcion1",
    imagen: null
  }
  /** Objeto json para pasar al php*/
  json = {
    accion: 'vivencias.alta',
    token: "identificación del usuario",
    datos: {
      idEtapa: this.vivencia.etapa,
      texto: this.vivencia.descripcion,
      foto: this.vivencia.imagen
    }
  }
  /** @param vivenciasServicio que instacia la clase que está en vivencias.service.ts  */
  constructor(private vivenciasServicio: VivenciasService) { }

  etapas: Etapas[] = ETAPAS

  ngOnInit(): void {
  }
  /**
   * Funcion enviar() para enviar el json al archivo php
   * @param url Será el archivo php al que voy a llamar
   */
  enviar(url: string): void {
    console.log('tron1');
    //let json = '{"accion":"vivencias.alta","token":"identificación del usuario","datos":{"idEtapa":' + this.vivencia.etapa + ',"texto":' + this.vivencia.descripcion + ',"foto":' + this.vivencia.imagen + '}}'
    console.log(JSON.stringify(this.json));

    this.vivenciasServicio.enviar(url, JSON.stringify(this.json))
      .subscribe(resultado =>
        console.log(`Se han enviado los datos ${resultado}`)
      )
  }

  recibir(url: string) {
    this.vivenciasServicio.recibir(url)
      .subscribe(resultado => {
        console.log(`se han recibido ${resultado[0].a}`)
        console.log(resultado[0]);
      }
      )
  }
}
