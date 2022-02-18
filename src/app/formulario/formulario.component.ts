import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
        textoPortada: new FormControl(''),
        textoContraportada: new FormControl(''),
        imagen: new FormControl('')
      });
    }
  }

  get textoPortada (){return this.formulario.get('textoPortada')};
  get textoContraportada (){return this.formulario.get('textoContraportada')};
  get imagen (){return this.formulario.get('imagen')};

  onSubmit() {
    console.log('Enviado');
    alert("Enviado");
  }

}
