import { Component, OnInit } from '@angular/core';
import { Vivencia } from '../vivencia';
import { Etapas } from '../etapas';
import { ETAPAS } from '../mock-etapas';
import { VivenciasService } from '../vivencias.service';

@Component({
  selector: 'alta',
  templateUrl: './alta-vivencias.component.html',
  styleUrls: ['./alta-vivencias.component.css']
})
export class AltaVivenciasComponent implements OnInit {

  vivencia: Vivencia = {
    etapa: 0,
    descripcion: "descripcion1",
    imagen: null
  }

  constructor(private vivenciasServicio: VivenciasService) { }
  
  etapas: Etapas[] = ETAPAS

  ngOnInit(): void {
  }

  enviar(url: string): void {
    console.log('tron1');
    let json='{"accion":"vivencias.alta","token":"identificación del usuario","datos":{"idEtapa":'+this.vivencia.etapa+',"texto":'+this.vivencia.descripcion+',"foto":'+this.vivencia.imagen+'}}'
    console.log(JSON.stringify(json));
    
    this.vivenciasServicio.enviar(url, JSON.stringify(json))
      .subscribe(resultado =>
        console.log(`Se han enviado los datos ${resultado}`)
      )
  }

  recibir(url: string) {
    this.vivenciasServicio.recibir(url)
      .subscribe(resultado =>{ 
        console.log(`se han recibido ${resultado[0].a}`)
      console.log(resultado[0]);
      }
      )
  }
}
