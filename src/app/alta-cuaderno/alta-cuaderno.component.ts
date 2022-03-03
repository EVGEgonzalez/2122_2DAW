import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from './../../environments/environment';
import { CuadernoService } from '../cuaderno.service';

//Imports para los mensajes...
import {MatSnackBar} from '@angular/material/snack-bar';
import {MensajeBarComponent} from '../mensaje-bar/mensaje-bar.component';

@Component({
  selector: 'alta-cuaderno',
  templateUrl: './alta-cuaderno.component.html',
  styleUrls: ['./alta-cuaderno.component.css']
})
export class AltaCuadernoComponent implements OnInit {
  formulario:any;
  selectedFile: any;

  constructor(private altaService:CuadernoService, private snackBar:MatSnackBar) {
    this.formulario=null
  }
  

  ngOnInit(): void {
    { 
      this.formulario = new FormGroup({
        textoPortada: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(300)]),
        imagen: new FormControl('')
      });
    }
  }

  get textoPortada (){return this.formulario.get('textoPortada')};
  get imagen (){return this.formulario.get('imagen')};


  procesarImagen(image:any) {
    const file: File = image.files[0]
    const reader = new FileReader()


  /*
    reader.addEventListener('load', (event: any) => {
      file.text().then(resp => this.selectedFile = resp)
    })
    reader.readAsDataURL(file)
  */
    reader.addEventListener('load', (event: any) => {

      file.text().then(resp => this.selectedFile = reader.result);
      
      //this.selectedFile = reader.result;
    });
    reader.readAsDataURL(file);
  }

  obtenerErrores() {
    if (this.textoPortada.hasError('required')) {
      return 'Tienes que introducir un texto';
    }

    return this.textoPortada.hasError('validators') ? 'El texto de la portada tiene que tener entre 5 y 300 caracteres' : '';
  }

  onSubmit() {
    //Especificamos a la API que queremos dar de alta un cuaderno, y el token se refiere a 
    //la ID del usuario en la B.D
    let datos = {
      "accion": "cuaderno.alta",
      "token": 1,
      "portada": this.textoPortada.value,
      "imagen": (this.selectedFile != null) ? this.selectedFile : "",
    };

    this.altaService.post(`${environment.apiURL}/backend/API/chooseService.php`,JSON.stringify(datos))
    .subscribe(res => {
        //Escribimos mensaje de éxito...
        let mensaje = new MensajeBarComponent(this.snackBar);

        if(res.resultado == "OK") mensaje.openSnackBar("Cuaderno creado con éxito...", "Cerrar")
        else mensaje.openSnackBar("Hubo un error al eliminar el cuaderno, motivo: " + res.mensaje, "Cerrar")
    });
  }

}
