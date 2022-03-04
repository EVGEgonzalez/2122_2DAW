import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Poblaciones } from '../poblaciones';
import { Alta } from '../alta.service';



@Component({
  selector: 'app-alta-poblaciones',
  templateUrl: './alta-poblaciones.component.html',
  styleUrls: ['./alta-poblaciones.component.css']
})
export class AltaPoblacionesComponent implements OnInit {
  poblaciones: Poblaciones
  constructor(private http: Alta) {
    this.poblaciones = new Poblaciones("", "", "")
  }

  ngOnInit(): void {
  }

  enviarDatos(url:string){

    this.http.enviar(url, this.poblaciones)
      .subscribe(respuesta=>{
        alert(respuesta);
      })

    /* this.http.recibir(url)
    .subscribe(respuesta=>{
      console.log(respuesta);

    }) */
  }
}
