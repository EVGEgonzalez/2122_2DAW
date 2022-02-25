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
  

  ngOnInit(): void {
    { 
      this.formulario = new FormGroup({
        textoPortada: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(300)]),
        imagen: new FormControl(''), 
        contraportada: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(300)])
      });
    }
  }

  get textoPortada (){return this.formulario.get('textoPortada')};
  get imagen (){return this.formulario.get('imagen')};
  get contraportada (){return this.formulario.get('contraportada')};

  procesarImagen(image:any) {
    const file: File = image.files[0]
    const reader = new FileReader()


    reader.addEventListener('load', (event: any) => {
      file.text().then(resp => this.selectedFile = resp)
    })
    reader.readAsDataURL(file)
  }

  obtenerErrores() {
    if (this.textoPortada.hasError('required')) {
      return 'You must enter a value';
    }

    return this.textoPortada.hasError('textoPortada') ? 'El texto de la portada tiene que tener entre 5 y 300 caracteres' : '';
  }

  onSubmit() {
    //Confirmación de que están rellenados los campos sino no deja enviar
   /*if (textoPortada=' ' && imagen=' ') {
      disabled=false;
    }*/

    //Especificamos a la API que queremos dar de alta un cuaderno, y el token se refiere a 
    //la ID del usuario en la B.D
    let datos = {
      "accion": "cuaderno.modificar",
      "token": 1,
      "portada": this.textoPortada.value,
      "imagen":this.selectedFile,
      "contraportada": this.contraportada.value
    };

    this.altaService.modificar(`${environment.apiURL}/backend/API/chooseService.php`,JSON.stringify(datos)).subscribe(res=>{
      console.log(res);
      
    });
  }

}
