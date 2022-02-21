import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs-formulario',
  templateUrl: './inputs-formulario.component.html',
  styleUrls: ['./inputs-formulario.component.css']
})
export class InputsFormularioComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
