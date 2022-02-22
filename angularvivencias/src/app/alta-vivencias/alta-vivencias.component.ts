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
    etapa: "etapa1",
    descripcion: "descripcion1",
    imagen: null
  }

  constructor(private vivenciasServicio: VivenciasService) { }
  
  etapas: Etapas[] = ETAPAS

  ngOnInit(): void {
  }
  enviarFormulario(): void {
    console.log('enviaformulario');
    let form = document.querySelector('form')
    console.log(form);

    /* let inputs=document.querySelectorAll('input')
    for(let input of inputs){

    } */
  }

  enviar(url: string): void {
    console.log('tron1');

    this.vivenciasServicio.enviar(url, JSON.stringify(this.vivencia))
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
