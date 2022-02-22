import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario:any;

  constructor() {
    this.formulario=null
  }
  

  ngOnInit(): void {
    { 
      this.formulario = new FormGroup({
        textoPortada: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(300)]),
        imagen: new FormControl(''),
        textoContraportada: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(300)])
      });
    }
  }

  get textoPortada (){return this.formulario.get('textoPortada')};
  get imagen (){return this.formulario.get('imagen')};
  get textoContraportada (){return this.formulario.get('textoContraportada')};

  onSubmit() {
    console.log('Enviado');
    alert("Enviado");
  }

}
