import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaEtapaComponent } from './alta-etapa/alta-etapa.component';
import { BorradoEtapasComponent } from './borrado-etapas/borrado-etapas.component';

const routes: Routes = [
  {path: 'altaetapas', component: AltaEtapaComponent},
  {path: 'borradoetapas', component: BorradoEtapasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
