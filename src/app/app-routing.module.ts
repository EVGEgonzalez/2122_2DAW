import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';
import { EliminarCuadernoComponent } from './eliminar-cuaderno/eliminar-cuaderno.component';

const routes: Routes = [
  { path: 'eliminar', component: EliminarCuadernoComponent },
  { path: 'alta', component: AltaCuadernoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
