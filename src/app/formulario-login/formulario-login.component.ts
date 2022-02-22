import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";


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


  enviar(){
    console.log(this.url);
    switch(this.url){
      case '/alta':
        console.log(this.altaForm.value)
        break;
    }
  
  }
}

