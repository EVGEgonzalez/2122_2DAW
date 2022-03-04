import { Component, OnInit } from '@angular/core';
import { EnviarService } from '../enviar.service';

@Component({
  selector: 'app-listar-etapas',
  templateUrl: './listar-etapas.component.html',
  styleUrls: ['./listar-etapas.component.css']
})
export class ListarEtapasComponent implements OnInit {
  r:any
  respuesta:any
  constructor(private enviar:EnviarService) {
    this.respuesta = []
    this.r = []
  }
  ngOnInit(): void {
    const datos={
      'accion':'etapa.listado',
    }
    this.enviar.servicio(datos).subscribe(res =>{
      this.r = res
      console.log(this.r)
      this.respuesta = JSON.parse(this.r)
    } )
  }
}
