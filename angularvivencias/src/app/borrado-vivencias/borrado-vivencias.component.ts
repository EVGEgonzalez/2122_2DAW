import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VivenciasService } from '../vivencias.service';
import { Vivencia } from '../vivencia';

@Component({
  selector: 'app-borrado-vivencias',
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
    token : '',
    datos : this.vivencia.idVivencia
  }

  vivencias = []

  constructor(private http: VivenciasService) { }

  ngOnInit(): void {
    this.http.enviar('//localhost/pruebaProxy/modeloVistaControlador/index/index.php?', JSON.stringify(this.jsonListar))
      .subscribe(resultado => { this.vivencias = resultado 
      console.log(resultado);
      })
  }

  borrarVivencia(datos:any){
    this.http.enviar('//localhost/pruebaProxy/modeloVistaControlador/index/index.php?', JSON.stringify(datos))
    .subscribe(respuesta=>{
      console.log(`Se ha borrado el registro ${respuesta['idVivencia']}`);}
      
    )
  }

}
