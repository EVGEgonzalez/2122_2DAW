import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Etapa } from '../etapa';
import { EnviarService } from '../enviar.service';
@Component({
  selector: 'app-alta-etapa',
  templateUrl: './alta-etapa.component.html',
  styleUrls: ['./alta-etapa.component.css']
})
export class AltaEtapaComponent implements OnInit {
  formulario:any
  etapa:Etapa
  respuesta :any
  r:any
  constructor(private enviar:EnviarService) {
    this.formulario=null
    this.etapa=new Etapa('','','','','')
    this.respuesta = []
    this.r = []
  }
  ngOnInit(): void {
    this.enviar.recibir().subscribe(res =>{
      this.r = res
      console.log(this.r)
      this.respuesta = JSON.parse(this.r)
    } )
0


  this.formulario = new FormGroup({
    idEtapa: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(2)]),
    duracion: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]?[0-9]?[0-9]:[0-5][0-9]$/gm)]),
    longitud: new FormControl('',[Validators.required,Validators.pattern(/^\d{1,4}(\,\d{1,3})?[ ]?$/gm)]),
    img: new FormControl(''),
    selectInicio: new FormControl('',[Validators.required]),
    selectFinal: new FormControl('',[Validators.required])
  });
}
  get idEtapa() { return this.formulario.get('idEtapa'); }
  get duracion() { return this.formulario.get('duracion'); }
  get longitud() { return this.formulario.get('longitud'); }
  get img() { return this.formulario.get('img'); }
  get selectInicio() { return this.formulario.get('selectInicio'); }
  get selectFinal() { return this.formulario.get('selectFinal'); }
  anyadir(){
    console.log("componente1.enviar()")
    let datos:any = []
    datos[0]=this.formulario.get('idEtapa').value
    datos[1]=this.formulario.get('duracion').value
    datos[2]=this.formulario.get('longitud').value
    datos[3]=this.formulario.get('selectInicio').value
    datos[4]=this.formulario.get('selectFinal').value
    if(datos[3]==datos[4]){
      alert('la poblacion de inicio no puede ser la misma poblacion que la final')
      return
    }
    console.log(datos)

    this.enviar.enviar(datos).subscribe(res => console.log(res))

  }

}
