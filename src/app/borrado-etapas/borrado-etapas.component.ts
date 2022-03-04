import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Borrado } from '../borrado';
import { EnviarService } from '../enviar.service';
@Component({
  selector: 'app-borrado-etapas',
  templateUrl: './borrado-etapas.component.html',
  styleUrls: ['./borrado-etapas.component.css']
})
export class BorradoEtapasComponent implements OnInit {
  formulario:any
  sw:boolean
  respuesta :any
  r:any
  borra:Borrado
  constructor(private enviar:EnviarService) {
    
    this.sw=false;
    this.respuesta = []
    this.r = []
    this.borra=new Borrado('','','')
  }
  ngOnInit(): void {
    let dato ={
      'accion':'selectEtapas',
    }
    this.enviar.servicio(dato).subscribe(res =>{
      this.r = res
      console.log(this.r)
      this.respuesta = JSON.parse(this.r)
    } )




}

  selectOption(event:any){
    console.log(event);
  }
  borrar(idEtapa:number){
    if(this.sw==false){
      alert('¿estas seguro de que quieres borrarlo?')
      this.sw=true
      return
    }else{
      this.sw=false
      console.log(idEtapa);
      let datos ={
        'accion':'borrar',
        'idEtapa':idEtapa
      }
      this.enviar.servicio(datos).subscribe(res => alert(res))
      let dato ={
        'accion':'selectEtapas',
        
      }
      this.enviar.servicio(dato).subscribe(res =>{
        this.r = res
        console.log(this.r)
        this.respuesta = JSON.parse(this.r)
        window.location.reload();
        
      } )
    }
   
  }
 modificar(idEtapa:number){

 } 
}
