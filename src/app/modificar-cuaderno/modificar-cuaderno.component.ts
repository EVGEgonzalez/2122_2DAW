import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from './../../environments/environment';
import { CuadernoService } from '../cuaderno.service';

@Component({
  selector: 'modifcar-cuaderno',
  templateUrl: './modificar-cuaderno.component.html',
  styleUrls: ['./modificar-cuaderno.component.css']
})
export class ModificarCuadernoComponent implements OnInit {
  formulario:any;
  selectedFile: any;

  constructor(private altaService:CuadernoService) {
    this.formulario=null
  }
  
  //Variables texto
  valuePortada = "";
  valueContraPortada = "";
  idCuaderno = null;
  imgPrevisualizacion = environment.apiURL + "/backend/API/";

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
        "token": 3,
        "pidoDatos": true
      };

      this.altaService.post(`${environment.apiURL}/backend/API/chooseService.php`,JSON.stringify(datos))
      .subscribe(res=>{
        this.idCuaderno = res.idCuaderno;
        this.valuePortada = res.textoPortada;
        this.valueContraPortada = res.contraportada;
        this.imgPrevisualizacion += res.imagen + "/imagen1.png";
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

      file.text().then(resp => console.log(resp));
      
      this.selectedFile = reader.result;
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
     ? 'El texto de la portada tiene que tener entre 5 y 100 caracteres'
     : '';
  }

  /**
   * Método que elimina una foto...
   */
  eliminarFoto() {
    document.querySelector("img#previsualizar")?.remove();
    this.selectedFile = null;
  }

  /**
   * Método al que se accede al darle click al botón de enviar del formulario.
   */
  onSubmit() {
    //Especificamos a la API que queremos modificar un cuaderno, y el token se refiere a 
    //la ID del cuaderno en la B.D
    let datos = {
      "accion": "cuaderno.modificar",
      "token": 3,
      "portada": this.textoPortada.value,
      "imagen": this.selectedFile,
      "contraportada": this.contraportada.value
    };

    this.altaService.post(`${environment.apiURL}/backend/API/chooseService.php`,JSON.stringify(datos)).subscribe(res=>{
      console.log(res);
    });
  }
}
