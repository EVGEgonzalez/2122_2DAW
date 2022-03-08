import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cuaderno de bitácora del camino ignaciano';

  constructor(private router:Router) {}

  checkLogueado() {
    if(localStorage.getItem("login") == "true") {
      this.router.navigate(["/mostrar"]);
      return true;
    }
    
    return false;
  }

  mostrarMenu(): void {
    let menu: any = document.querySelector('nav ul');
    if(menu.style.display == 'flex'){
      menu.style.display = 'none'
    }
    menu.style.display = 'flex'
  }
}
