import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { AltaVivenciasComponent } from './alta-vivencias/alta-vivencias.component';
import { ConsultarVivenciasComponent } from './consultar-vivencias/consultar-vivencias.component';
import { BorradoVivenciasComponent } from './borrado-vivencias/borrado-vivencias.component';
//import { AltaEtapaComponent } from './alta-etapa/alta-etapa.component';
import { AltaPoblacionesComponent } from './alta-poblaciones/alta-poblaciones.component';

const routes: Routes = [
  {path: 'login', component: FormularioLoginComponent},
  {path: 'alta', component: FormularioLoginComponent},
  {path: 'alta-vivencia', component: AltaVivenciasComponent},
  {path: 'consultar-vivencia', component: ConsultarVivenciasComponent},
  {path: 'borrado-vivencia', component: BorradoVivenciasComponent},
  //{path: 'alta-etapa', component: AltaEtapaComponent},
  {path: 'alta-poblaciones', component: AltaPoblacionesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
