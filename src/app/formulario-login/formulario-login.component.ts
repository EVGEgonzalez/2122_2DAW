import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ConfigService } from '../config/config.service';
import { response } from 'express';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  //Formulario Alta
  altaForm = new FormGroup({
    emailAlta: new FormControl('', [Validators.required, Validators.email]),
    passwordAlta: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirm_password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    telefono: new FormControl('',[Validators.required, Validators.minLength(9), Validators.maxLength(9)])
  })
  get emailAlta(){return this.altaForm.get('emailAlta')}  
  get passwordAlta(){return this.altaForm.get('passwordAlta')}
  get confirm_password(){return this.altaForm.get('confirm_password')}
  get telefono(){return this.altaForm.get('telefono')}
  
  //Formulario Login
  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    passwordLogin: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })
  get emailLogin(){return this.altaForm.get('emailLogin')}  
  get passwordLogin(){return this.altaForm.get('passwordLogin')}
  
  onPasswordChange() {
    if (this.confirm_password!.value == this.passwordAlta!.value) {
      this.confirm_password!.setErrors(null);
    } else {
      this.confirm_password!
      .setErrors({ mismatch: true });
    }
  }

  ngOnInit(): void {
  }
  
  url: string
  constructor(public router: Router, private configService: ConfigService){ 
    this.url=router.url;
  }

  enviar() {
    switch (this.url) {
      case '/alta':
        
        this.configService.alta(this.altaForm.value).subscribe(
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
        console.log(this.loginForm.value);
        
        this.configService.login(this.loginForm.value).subscribe(
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

