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
  ficheroBase64:any
  constructor(private enviar:EnviarService) {
    this.formulario=null
    this.etapa=new Etapa('','','','','')
    this.respuesta = []
    this.r = []
    this.ficheroBase64=''
  }
  ngOnInit(): void {
    const respuesta={
      'accion':'etapa.select',
    }
    this.enviar.servicio(respuesta).subscribe(res =>{
      this.r = res
      console.log(this.r)
      this.respuesta = JSON.parse(this.r)
    } )



  this.formulario = new FormGroup({
    idEtapa: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(2)]),
    duracion: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]?[0-9]?[0-9]:[0-5][0-9]$/gm)]),
    longitud: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(6),Validators.pattern("^[0-9]{1,3}(,[0-9]{1,3})?$")]),
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



    const datos ={
      'accion':'etapa.altaEtapa',
      'idEtapa': this.formulario.get('idEtapa').value,
      'duracion':this.formulario.get('duracion').value,
      'longitud':this.formulario.get('longitud').value,
      'idPoblacionInicio':this.formulario.get('selectInicio').value,
      'idPoblacionFinal':this.formulario.get('selectFinal').value
    }
    if(datos['idPoblacionInicio']==datos['idPoblacionFinal']){
      alert('la poblacion de inicio no puede ser la misma poblacion que la final')
      return
    }

    this.enviar.servicio(datos).subscribe(res => {
    this.comprobarimg(res)
   }

    )


  }
   comprobarimg(res:any) {
    console.log('asdasdasdasd')
    if(res=='true'){
      console.log("entro dentro")
      if(this.formulario.get('img').value!=""){
        this.enviarImagen()
        console.log('he pasao');
      }



    }else {
      console.log(res)
    }
  }
  procesarImagen(imageInput: any) {
    const file: File = imageInput.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', (event: any) => {
      file.text().then(texto => this.ficheroBase64 = reader.result)
    })
    reader.readAsDataURL(file);
  }

  enviarImagen() {
    console.log("AltaEtapaComponent.enviarImagen()")
    //console.log(this.ficheroBase64)
    //En lugar de la función flecha, llamar a un método del componente.
    let datos ={
      'accion':'etapa.imagen',
      'imagen': this.ficheroBase64
    }
    this.enviar.servicio(datos).subscribe(
      res => console.log(res),
      err => console.error(err))
  }
}
