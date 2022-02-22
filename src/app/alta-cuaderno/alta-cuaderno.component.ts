import { Component, OnInit } from '@angular/core';
import { AltaCuadernoService } from '../alta-cuaderno.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-alta-cuaderno',
  templateUrl: './alta-cuaderno.component.html',
  styleUrls: ['./alta-cuaderno.component.css']
})



export class AltaCuadernoComponent implements OnInit {

  constructor(private altaService : AltaCuadernoService) { }


  ngOnInit(): void {
  }

  enviarFormulario() : void {

    //Especificamos a la API que queremos dar de alta un cuaderno, y el token se refiere a 
    //la ID del usuario en la B.D
    let datos = {
      "accion": "cuaderno.alta",
      "token": 1
    };

    this.altaService.post(`${environment.apiURL}/backend/API/server.php`,JSON.stringify(datos));
  }
}
