import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Poblaciones } from '../poblaciones';
import { Alta } from '../alta.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  poblaciones: Poblaciones
  constructor(private http: Alta) {
    this.poblaciones = new Poblaciones("", "", "")
  }

  ngOnInit(): void {
  }

  enviarDatos(url:string){

    this.http.enviar(url, this.poblaciones)
      .subscribe(respuesta=>{
        console.log(respuesta);
      })

    /* this.http.recibir(url)
    .subscribe(respuesta=>{
      console.log(respuesta);
      
    }) */
  }

}
