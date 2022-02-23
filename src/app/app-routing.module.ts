import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';
import { MostrarCuadernoComponent } from './mostrar-cuaderno/mostrar-cuaderno.component';

const routes: Routes = [
  { path: 'alta', component: AltaCuadernoComponent },
  { path: 'mostrar', component: MostrarCuadernoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
