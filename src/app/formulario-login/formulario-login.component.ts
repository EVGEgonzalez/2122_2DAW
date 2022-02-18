import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eventoLogin(evento: Event){
    evento.preventDefault();
    console.log('Evento de login');
    return false;
  }
}
