import { Component, OnInit } from '@angular/core';
import { VivenciasService } from '../vivencias.service';

@Component({
  selector: 'listarVivencia',
  templateUrl: './listar-vivencias.component.html',
  styleUrls: ['./listar-vivencias.component.css']
})
export class ListarVivenciasComponent implements OnInit {
  /**
   * Creo el objet json que necesito para enviar la accion que tiene que hacer
   */
  json = {
    accion: 'vivencias.listar',
    token: "identificación del usuario",
  }
  datos=[]
  constructor(private vivenciasServicio: VivenciasService) { }
  /**
   * ngOnInit() función que se ejecuta al iniciar el componente que tiene el método enviar 
   * de las vivenciasServicio que llama al archivo php y envia el json creado anteriormente.
   */
  ngOnInit(): void {
    console.log('Hola mundo');
    
    this.vivenciasServicio.enviar(JSON.stringify(this.json))
      .subscribe(resultado=>{
          console.log(resultado)
          this.datos=resultado
        }
      )
  }

}
