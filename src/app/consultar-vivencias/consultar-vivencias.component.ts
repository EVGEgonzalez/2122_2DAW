import { Component, OnInit } from '@angular/core';
import { VivenciasService } from '../vivencias.service';

@Component({
  selector: 'consultarVivencia',
  templateUrl: './consultar-vivencias.component.html',
  styleUrls: ['./consultar-vivencias.component.css']
})
export class ConsultarVivenciasComponent implements OnInit {
  json={
    accion:'vivencias.consultar',
    token:'',
    datos:{
      idVivencia:11
    }
  }

  constructor(private vivenciasServicio:VivenciasService) { }

  ngOnInit(): void {
    this.vivenciasServicio.enviar(JSON.stringify(this.json))
      .subscribe(respuesta=>{console.log(respuesta);}
      )
  }

}
