import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Etapa } from '../etapa';
import { EnviarService } from '../enviar.service';
import { HttpClientModule } from "@angular/common/http";
@Component({
  selector: 'app-borrar-etapa',
  templateUrl: './borrar-etapa.component.html',
  styleUrls: ['./borrar-etapa.component.css']
})
export class BorrarEtapaComponent implements OnInit {
  formulario:any
  etapa:Etapa
  respuesta: Etapa[]
  constructor(private enviar:EnviarService) {
    this.formulario=null
    this.etapa=new Etapa('','','')
    this.respuesta =[];
  }
  ngOnInit(): void {
    this.formulario = new FormGroup({

    });
  }

  borrar(){
    console.log("componente1.enviar()")
    let etapa:any = this.formulario.get('seleccionarEtapa').value
    //En lugar de la función flecha, llamar a un método del componente.

    //this.enviar.enviar(datos).subscribe(res => console.log(res))

  }

}
