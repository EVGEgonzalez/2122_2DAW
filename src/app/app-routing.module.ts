import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaEtapaComponent } from './alta-etapa/alta-etapa.component';
import { BorradoEtapasComponent } from './borrado-etapas/borrado-etapas.component';
import { ListarEtapasComponent } from './listar-etapas/listar-etapas.component';
import {ModificarEtapaComponent} from './modificar-etapa/modificar-etapa.component';

const routes: Routes = [
  {path: 'altaetapas', component: AltaEtapaComponent},
  {path: 'borradoetapas', component: BorradoEtapasComponent},
  {path: 'listadoetapas', component: ListarEtapasComponent},
  {path: 'modificaretapas', component: ModificarEtapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
