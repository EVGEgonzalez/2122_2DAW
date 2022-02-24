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

  altaForm = new FormGroup({
    iMailAlta: new FormControl('', [Validators.required, Validators.email]),
    iPasswordAlta: new FormControl('',[Validators.required, Validators.minLength(6)]),
    iPassword2Alta: new FormControl('',[Validators.required, Validators.minLength(6)])
  })
  get iMailAlta(){return this.altaForm.get('iMailAlta')}  
  get iPasswordAlta(){return this.altaForm.get('iPasswordAlta')}
  get iPassword2Alta(){return this.altaForm.get('iPassword2Alta')}
  
  
  url: string
  constructor(public router: Router, private configService: ConfigService){ 
    this.url=router.url;
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

