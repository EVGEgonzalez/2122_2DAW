import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  
  url: string
  constructor(router: Router, private configService: ConfigService) { 
    this.url=router.url;
  }

  ngOnInit(): void {
  }

  enviado=false;

  enviar(){
    this.enviado=true;
    console.log(this.url);
    switch(this.url){
      case '/alta':
        console.log('Dar de alta');
        this.configService.alta('correo@fundacionloyola.net', 'sdsadasd');
        break;
      case '/login':
        console.log('Loguearse');
        this.configService.login('correo@fundacionloyola.net', 'sdsadasd');
        break;
    }
  }
}
