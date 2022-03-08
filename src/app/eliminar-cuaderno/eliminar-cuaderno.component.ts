import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CuadernoService} from '../cuaderno.service';
import {environment} from '../../environments/environment';

//Imports para los mensajes...
import {MensajeBarComponent} from '../mensaje-bar/mensaje-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';


/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-eliminar-cuaderno',
  templateUrl: './eliminar-cuaderno.component.html'
})
export class EliminarCuadernoComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}


@Component({
  selector: 'eliminar-cuaderno-dialog',
  templateUrl: 'eliminar-cuaderno-dialog.html',
})
export class DialogElementsExampleDialog {

  constructor(private servicio:CuadernoService, private snackBar:MatSnackBar) {}

  public eliminarCuaderno() {
    //Especificamos a la API que queremos dar de alta un cuaderno, y el token se refiere a 
    //la ID del usuario en la B.D
    let datos = {
      "accion": "cuaderno.baja"
    };

    this.servicio.post(`${environment.apiURL}/index.php`,JSON.stringify(datos))
    .subscribe(res => {
      console.log(res);
      //Escribimos mensaje de éxito...
      let mensaje = new MensajeBarComponent(this.snackBar);

      if(res.resultado == "OK") mensaje.openSnackBar("Cuaderno eliminado con éxito...", "Cerrar")
      else mensaje.openSnackBar("Hubo un error al eliminar el cuaderno, motivo: " + res.mensaje, "Cerrar")
    });
  }
}