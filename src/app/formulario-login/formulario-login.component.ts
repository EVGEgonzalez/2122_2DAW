import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

import { ConfigService } from '../config/config.service';
import { response } from 'express';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  altaForm = new FormGroup({
    iMailAlta: new FormControl('', [Validators.required, Validators.email]),
    passwordAlta: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirm_password: new FormControl('',[Validators.required, Validators.minLength(6)])
  })
  get iMailAlta(){return this.altaForm.get('iMailAlta')}  
  get passwordAlta(){return this.altaForm.get('passwordAlta')}
  get confirm_password(){return this.altaForm.get('confirm_password')}
  
  
  url: string
  constructor(public router: Router, private configService: ConfigService){ 
    this.url=router.url;
  }
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
        
  enviar() {
    // console.log(this.url);
  // switch(this.url){
  //   case '/alta':
  //     console.log(this.altaForm.value)
  //     break;
    // this.configService.loginUsuario(this.login).subscribe (
    //   response => {
    //     if(response['resultado'] == 'OK') {
    //       alert(datos);
    //     } else {
    //       alert(datos);
    //     }
    //   }
    // );
  }
}

