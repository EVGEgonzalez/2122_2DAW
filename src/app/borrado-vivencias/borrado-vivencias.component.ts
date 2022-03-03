import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VivenciasService } from '../vivencias.service';
import { Vivencia } from '../vivencia';

@Component({
  selector: 'borradoVivencia',
  templateUrl: './borrado-vivencias.component.html',
  styleUrls: ['./borrado-vivencias.component.css']
})
export class BorradoVivenciasComponent implements OnInit {

  vivencia: Vivencia = {
    idVivencia: 0,
    etapa: 0,
    descripcion: '',
    imagen: ''
  }

  jsonListar = {
    accion: 'vivencias.listar',
    token: "identificación del usuario",
  }

  jsonBorrar = {
    accion: 'vivencias.borrar',
    token: '',
    datos: this.vivencia.idVivencia
  }

  /* Recoge las vivencias de la BD para listarlas */
  vivencias = []

  /*  */
  vivenciaBorrada = []

  estado?: boolean

  constructor(private http: VivenciasService) { }

  ngOnInit(): void {
    this.http.enviar(JSON.stringify(this.jsonListar))
      .subscribe(resultado => {
        this.vivencias = resultado
        console.log(resultado);
      })
  }
  /**
   * @function borrarVivencia() llama al archivo php y le pasa los datos necesarios para borrar la Vivencia
   *
   * @param {*} datos será el idvivencia que necesitaremos para realizar la consulta
   * @memberof BorradoVivenciasComponent
   */
  borrarVivencia() {
    this.http.enviar(JSON.stringify(this.jsonBorrar))
      .subscribe(respuesta => {
        this.vivenciaBorrada = respuesta;
        this.estado = this.vivenciaBorrada[0]['estado'];
        console.log(respuesta);
      }

      )
  }

}
