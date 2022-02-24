import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cuaderno Ignaciano';

  
  mostrarMenu(): void {
    let menu: any = document.querySelector('nav ul');
    if(menu.style.display == 'flex') menu.style.display = 'none';
    else menu.style.display = 'flex';

    //Esto se tiene que ir actualizando para poder arreglar el menu...
    if(window.innerWidth > 768 ) console.log("a");
    
  }
}

