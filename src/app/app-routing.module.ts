import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';
import { EliminarCuadernoComponent } from './eliminar-cuaderno/eliminar-cuaderno.component';
import { ModificarCuadernoComponent } from './modificar-cuaderno/modificar-cuaderno.component';
import { MostrarCuadernoComponent } from './mostrar-cuaderno/mostrar-cuaderno.component';
import { AltaVivenciasComponent } from './alta-vivencias/alta-vivencias.component';
import { ConsultarVivenciasComponent } from './consultar-vivencias/consultar-vivencias.component';
import { BorradoVivenciasComponent } from './borrado-vivencias/borrado-vivencias.component';
//import { AltaEtapaComponent } from './alta-etapa/alta-etapa.component';
import { AltaPoblacionesComponent } from './alta-poblaciones/alta-poblaciones.component';
import { AltaEtapaComponent } from './alta-etapa/alta-etapa.component';
import { BorradoEtapasComponent } from './borrado-etapas/borrado-etapas.component';
import { ListarEtapasComponent } from './listar-etapas/listar-etapas.component';
import { AuthGuard } from "./authguard.guard";

const routes: Routes = [
  //{path: '', component: MostrarCuadernoComponent, pathMatch:'full'},
  { path: 'alta', component: AltaCuadernoComponent, canActivate:[AuthGuard] },
  { path: 'mostrar', component: MostrarCuadernoComponent, canActivate:[AuthGuard] },
  { path: 'eliminar', component: EliminarCuadernoComponent, canActivate:[AuthGuard] },
  { path: 'modificar', component: ModificarCuadernoComponent, canActivate:[AuthGuard] },
  {path: 'login', component: FormularioLoginComponent},
  {path: 'alta-usuario', component: FormularioLoginComponent, canActivate:[AuthGuard]},
  {path: 'alta-vivencia', component: AltaVivenciasComponent, canActivate:[AuthGuard]},
  {path: 'consultar-vivencia', component: ConsultarVivenciasComponent, canActivate:[AuthGuard]},
  {path: 'borrado-vivencia', component: BorradoVivenciasComponent, canActivate:[AuthGuard]},
  //{path: 'alta-etapa', component: AltaEtapaComponent},
  {path: 'alta-poblaciones', component: AltaPoblacionesComponent, canActivate:[AuthGuard]},
  {path: 'altaetapas', component: AltaEtapaComponent, canActivate:[AuthGuard]},
  {path: 'borradoetapas', component: BorradoEtapasComponent, canActivate:[AuthGuard]},
  {path: 'listadoetapas', component: ListarEtapasComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }


//En esta constante metemos todas los componentes de las rutas y así en el app.module solo tendremos que importar esta...
export const routingComponents = [AltaCuadernoComponent, MostrarCuadernoComponent, EliminarCuadernoComponent, ModificarCuadernoComponent];
