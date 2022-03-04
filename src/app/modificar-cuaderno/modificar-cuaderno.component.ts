import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from './../../environments/environment';
import { CuadernoService } from '../cuaderno.service';

//Imports para los mensajes...
import {MatSnackBar} from '@angular/material/snack-bar';
import {MensajeBarComponent} from '../mensaje-bar/mensaje-bar.component';

@Component({
  selector: 'modifcar-cuaderno',
  templateUrl: './modificar-cuaderno.component.html',
  styleUrls: ['./modificar-cuaderno.component.css']
})
export class ModificarCuadernoComponent implements OnInit {
  formulario:any;
  selectedFile: any;

  constructor(private altaService:CuadernoService, private snackBar:MatSnackBar) {
    this.formulario=null
  }
  
  //Variables texto
  valuePortada = "";
  valueContraPortada = "";
  idCuaderno = null;
  idUsuario = null;
  imgPrevisualizacion:any = null;

  ngOnInit(): void {
    {
      this.formulario = new FormGroup({
        textoPortada: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]),
        imagen: new FormControl(''), 
        contraportada: new FormControl('',[Validators.required,Validators.maxLength(100)])
      });

      //Pedimos los datos del cuaderno para modificarlos...
      //En el token se especifica la id del usuario...
      let datos = {
        "accion": "cuaderno.modificar",
        "token": 4,
        "pidoDatos": true
      };

      this.altaService.post(`${environment.apiURL}/php/index.php`,JSON.stringify(datos))
      .subscribe(res=>{
        this.idUsuario = res.idUsuario;
        this.idCuaderno = res.idCuaderno;
        this.valuePortada = res.textoPortada;
        this.valueContraPortada = res.contraportada;
        
        //Si no hay imagen la ponemos en NULL (que mostrará la de por defecto...)
        if(res.imagen == null) 
          this.imgPrevisualizacion = null;
        else 
          //Cargamos la imagen del servidor...
          this.imgPrevisualizacion = environment.apiURL + "/php/controlador" + res.imagen + "/imagen1.png";

        console.log(res);
      });
    }
  }

  get textoPortada (){return this.formulario.get('textoPortada')};
  get imagen (){return this.formulario.get('imagen')};
  get contraportada (){return this.formulario.get('contraportada')};

  /**
   * Método que procesa la imagen a Base64
   * @param image imagen
   */
  procesarImagen(image:any) {
    const file: File = image.files[0]
    const reader = new FileReader()


    reader.addEventListener('load', (event: any) => {

      file.text().then(resp => this.imgPrevisualizacion = reader.result);
      
      //this.selectedFile = reader.result;
    });
    reader.readAsDataURL(file);

    console.log(this.selectedFile);


  }

  /**
   * Método que devuelve un mensaje de error si no se cumplen las condiciones del formulario
   * @returns Mensaje de error
   */
  obtenerErrores() {
    if (this.textoPortada.hasError('required')) {
      return 'Tienes que introducir un texto.';
    }

    return (this.textoPortada.hasError('minlength') || this.textoPortada.hasError('maxlength'))
     ? 'El texto de la portada tiene que tener entre 5 y 1000 caracteres'
     : '';
  }

  /**
   * Método que elimina una foto...
   */
  eliminarFoto() {
    //document.querySelector("img#previsualizar")?.remove();
    //this.imgPrevisualizacion = environment.rutaAssets + "../../interrogacion.png";

    this.imgPrevisualizacion = null;
  }

  /**
   * Método al que se accede al darle click al botón de enviar del formulario.
   */
  onSubmit() {
    //Especificamos a la API que queremos modificar un cuaderno, y el token se refiere a 
    //la ID del cuaderno en la B.D

    console.log(this.imgPrevisualizacion);
    

    let datos = {
      "accion": "cuaderno.modificar",
      "token": this.idUsuario,
      "portada": document.querySelectorAll("input")[1].value,
      "imagen": this.imgPrevisualizacion,
      "contraportada": this.contraportada.value
    };

    this.altaService.post(`${environment.apiURL}/php/index.php`,JSON.stringify(datos)).subscribe(res=>{
      console.log(res); 
      //Escribimos mensaje de éxito...
      let mensaje = new MensajeBarComponent(this.snackBar);
  
      if(res.resultado == "OK") mensaje.openSnackBar("Cuaderno modificado con éxito...", "Cerrar")
      else mensaje.openSnackBar("Hubo un error al modificar el cuaderno, motivo: " + res.mensaje, "Cerrar")
    }); 
  }
}
