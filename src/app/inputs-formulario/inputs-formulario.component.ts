import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-formulario',
  templateUrl: './inputs-formulario.component.html',
  styleUrls: ['./inputs-formulario.component.css']
})
export class InputsFormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(evento: Event){
    evento.preventDefault();
    console.log('Evento de login');
  }
}
