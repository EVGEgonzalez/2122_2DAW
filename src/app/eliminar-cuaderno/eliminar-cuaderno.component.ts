import { Component, OnInit } from '@angular/core';
import { AltaCuadernoService } from '../alta-cuaderno.service';

@Component({
  selector: 'app-eliminar-cuaderno',
  templateUrl: './eliminar-cuaderno.component.html',
  styleUrls: ['./eliminar-cuaderno.component.css']
})
export class EliminarCuadernoComponent implements OnInit {

  constructor(private altaService : AltaCuadernoService,) { }

  ngOnInit(): void {
  }

  eliminarFormulario() : void {
    let datos = {
      "accion": "cuaderno.baja",
      "token": 1
    };
      console.log("test");
      this.altaService.post("http://localhost/Ejercicios/Proyectos/Camino%20Ignaciano/API/server.php",JSON.stringify(datos));
    }

}
