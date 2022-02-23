import { Component, OnInit } from '@angular/core';
import { VivenciasService } from '../vivencias.service';

@Component({
  selector: 'listar',
  templateUrl: './listar-vivencias.component.html',
  styleUrls: ['./listar-vivencias.component.css']
})
export class ListarVivenciasComponent implements OnInit {
  json = {
    accion: 'vivencias.listar',
    token: "identificación del usuario",
  }

  constructor(private vivenciasServicio: VivenciasService) { }

  ngOnInit(): void {
    console.log('Hola mundo');
    
    this.vivenciasServicio.enviar('http://localhost/pruebaProxy/modeloVistaControlador/index/index.php?', JSON.stringify(this.json))
      .subscribe(resultado=>console.log(resultado)
      )
  }

}
