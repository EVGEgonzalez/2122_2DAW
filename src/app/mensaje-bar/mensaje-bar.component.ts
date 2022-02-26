import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mensaje-bar',
  templateUrl: './mensaje-bar.component.html',
  styleUrls: ['./mensaje-bar.component.css']
})
export class MensajeBarComponent {

  constructor(private mensajeBar: MatSnackBar) { }

  /** Variable que controla la duración en segudos de un mensaje... */
  private duracionMensaje:number = 5;

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this.mensajeBar.open(message, action, {
      duration: this.duracionMensaje * 1000
    });
  }
}
