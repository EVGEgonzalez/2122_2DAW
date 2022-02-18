import { Component, OnInit } from '@angular/core';
import { Vivencia } from '../vivencia';
import { Etapas } from '../etapas';
import { ETAPAS } from '../mock-etapas';

@Component({
  selector: 'alta',
  templateUrl: './alta-vivencias.component.html',
  styleUrls: ['./alta-vivencias.component.css']
})
export class AltaVivenciasComponent implements OnInit {

  vivencia:Vivencia={
    etapa:"etapa1",
    descripcion:"descripcion1",
    imagen:null
  }

  etapas:Etapas[] = ETAPAS

  ngOnInit(): void {
  }
  enviarFormulario():void{
    console.log('enviaformulario');
    let form =document.querySelector('form')
    console.log(form);
    
    /* let inputs=document.querySelectorAll('input')
    for(let input of inputs){

    } */
  }
}
