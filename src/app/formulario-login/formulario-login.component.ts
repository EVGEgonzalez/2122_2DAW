import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  //Formulario de Alta y validadores
  altaForm = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(2)]),
    emailAlta: new FormControl('', [Validators.required, Validators.email]),
    // passwordAlta: new FormControl('',[Validators.required, Validators.minLength(6)]),
    // confirm_password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    telefono: new FormControl('',[Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    imagen: new FormControl('')
  })
  get emailAlta(){return this.altaForm.get('emailAlta')}  
  // get passwordAlta(){return this.altaForm.get('passwordAlta')}
  // get confirm_password(){return this.altaForm.get('confirm_password')}
  get nombre(){return this.altaForm.get('nombre')}
  get telefono(){return this.altaForm.get('telefono')}
  get imagen(){return this.altaForm.get('imagen')}
  
  //Formulario Login y validadores
  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    passwordLogin: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })
  get emailLogin(){return this.altaForm.get('emailLogin')}  
  get passwordLogin(){return this.altaForm.get('passwordLogin')}

  /**
   * @function onPasswordChange
   * @description comprueba si el campo de passworAlta y confirm_password coinciden, si no, el campo confirm password es erróneo
   */
  // onPasswordChange() {
  //   if (this.confirm_password!.value == this.passwordAlta!.value) {
  //     this.confirm_password!.setErrors(null);
  //   } else {
  //     this.confirm_password!
  //     .setErrors({ mismatch: true });
  //   }
  // }

  ngOnInit(): void {
  }

  //Ficheros
  ficheroBase64: any;
  procesarImagen(imageInput: any) {
    const file: File = imageInput.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', (event: any) => {
      file.text().then(texto => this.ficheroBase64 = reader.result)
    })
    reader.readAsDataURL(file)
    console.log(this.ficheroBase64)
  }
  
  url: string
  constructor(public router: Router, private configService: ConfigService){ 
    this.url=router.url;
  }
  /**
   * @function enviar
   * @description función que envía el valor del formulario en forma de objeto al servicio. Según la respuesta del servidor muestra éxito o fracaso. 
   */

  enviar() {
    switch (this.url) {
      case '/alta':
        let json = {
          "accion": "alta.usuario",
          "nombre": this.nombre?.value,
          "emailAlta": this.emailAlta?.value,
          "telefono": this.telefono?.value,
          "imagen": this.ficheroBase64
        }
        this.configService.alta(json).subscribe(
          response => {
            if (response['resultado'] == 'OK') {
              alert('exito');
            } else {
              alert('fracaso');
            }
          }
        );
        break;
      case '/login':
        let json2 = {
          "accion": "login.usuario",
          "emailLogin": this.emailLogin,
          "passwordLogin": this.passwordLogin
        }
        this.configService.login(json2).subscribe(
          response => {
            if (response['resultado'] == 'OK') {
              alert('exito');
            } else if (response['resultado'] == 'NOK') {
              alert('fracaso');
            }
          }
        );
        break;
    }
  }
}

