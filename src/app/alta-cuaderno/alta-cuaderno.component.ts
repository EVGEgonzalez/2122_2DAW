import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from './../../environments/environment';
import { AltaCuadernoService } from '../alta-cuaderno.service';

@Component({
  selector: 'alta-cuaderno',
  templateUrl: './alta-cuaderno.component.html',
  styleUrls: ['./alta-cuaderno.component.css']
})
export class AltaCuadernoComponent implements OnInit {
  formulario:any;

  constructor(private altaService:AltaCuadernoService) {
    this.formulario=null
  }
  

  ngOnInit(): void {
    { 
      this.formulario = new FormGroup({
        textoPortada: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(300)]),
        imagen: new FormControl(''),
        textoContraportada: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(300)])
      });
    }
  }

  get textoPortada (){return this.formulario.get('textoPortada')};
  get imagen (){return this.formulario.get('imagen')};
  get textoContraportada (){return this.formulario.get('textoContraportada')};

  onSubmit() {

    //Especificamos a la API que queremos dar de alta un cuaderno, y el token se refiere a 
    //la ID del usuario en la B.D
    let datos = {
      "accion": "cuaderno.alta",
      "token": 1,
      "portada": this.textoPortada.value,
      "imagen":this.imagen.value,
      "textoContraportada": this.textoContraportada.value
    };

    this.altaService.post(`${environment.apiURL}/backend/API/chooseService.php`,JSON.stringify(datos));
  }

}
