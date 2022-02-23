import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-cuaderno',
  templateUrl: './mostrar-cuaderno.component.html',
  styleUrls: ['./mostrar-cuaderno.component.css']
})
export class MostrarCuadernoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  centered = false;
  disabled = false;
  unbounded = false;

  /*radius: number;
  color: string;*/

}
