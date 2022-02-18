import { Component, OnInit } from '@angular/core';
import { AltaCuadernoService } from '../alta-cuaderno.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alta-cuaderno',
  templateUrl: './alta-cuaderno.component.html',
  styleUrls: ['./alta-cuaderno.component.css']
})



export class AltaCuadernoComponent implements OnInit {

  constructor(
    private altaService : AltaCuadernoService,
    ) { }




  ngOnInit(): void {
  }

  enviarFormulario() : void {
  let datos = {
    "accion": "cuaderno.alta",
    "token": 1
  };
    console.log("test");
    this.altaService.post("http://localhost/Ejercicios/Proyectos/Camino%20Ignaciano/API/server.php",JSON.stringify(datos));
  }

  public enviarData() {
    //this.altaService.post();
  }

}
