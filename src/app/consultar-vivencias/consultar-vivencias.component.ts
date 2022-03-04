import { Component, OnInit } from '@angular/core';
import { VivenciasService } from '../vivencias.service';
import { Vivencia } from '../vivencia';

@Component({
  selector: 'consultarVivencia',
  templateUrl: './consultar-vivencias.component.html',
  styleUrls: ['./consultar-vivencias.component.css']
})
export class ConsultarVivenciasComponent implements OnInit {
  vivencia: Vivencia = {
    idVivencia: 0,
    etapa: 0,
    descripcion: '',
    imagen: ''
  }
  json = {
    accion: 'vivencias.consultar',
    token: '',
    datos: {
      idVivencia: this.vivencia.idVivencia
    }
  }
  jsonListar = {
    accion: 'vivencias.listar',
    token: "identificación del usuario",
  }

  vivencias = []
  vivenciaConsultada=[]

  constructor(private vivenciasServicio: VivenciasService) { }

  ngOnInit(): void {
    this.vivenciasServicio.enviar(JSON.stringify(this.jsonListar))
      .subscribe(resultado => {
        this.vivencias = resultado
        console.log(resultado);
      })
  }
  consultarVivencia() {
    this.vivenciasServicio.enviar(JSON.stringify(this.json))
    .subscribe(resultado=>
      {
        this.vivenciaConsultada = resultado;
        console.log(resultado);        
      }
    )
  }

}
