import { Component, OnInit } from '@angular/core';
import { CuadernoService } from '../cuaderno.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-cuaderno',
  templateUrl: './eliminar-cuaderno.component.html',
  styleUrls: ['./eliminar-cuaderno.component.css']
})
export class EliminarCuadernoComponent implements OnInit {

  constructor(
    private altaService : CuadernoService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  eliminarFormulario() : void {
    const dialogRef = this.dialog.open(EliminarCuadernoComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    let datos = {
      "accion": "cuaderno.baja",
      "token": 1
    };
      console.log("test");
      this.altaService.post("http://localhost/Ejercicios/Proyectos/Camino%20Ignaciano/API/server.php",JSON.stringify(datos));
  }
}
/*@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}*/