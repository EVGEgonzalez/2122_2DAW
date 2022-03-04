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


const routes: Routes = [
  { path: 'alta', component: AltaCuadernoComponent },
  { path: 'mostrar', component: MostrarCuadernoComponent },
  { path: 'eliminar', component: EliminarCuadernoComponent },
  { path: 'modificar', component: ModificarCuadernoComponent },
  {path: 'login', component: FormularioLoginComponent},
  {path: 'alta-usuario', component: FormularioLoginComponent},
  {path: 'alta-vivencia', component: AltaVivenciasComponent},
  {path: 'consultar-vivencia', component: ConsultarVivenciasComponent},
  {path: 'borrado-vivencia', component: BorradoVivenciasComponent},
  //{path: 'alta-etapa', component: AltaEtapaComponent},
  {path: 'alta-poblaciones', component: AltaPoblacionesComponent},
  {path: 'altaetapas', component: AltaEtapaComponent},
  {path: 'borradoetapas', component: BorradoEtapasComponent},
  {path: 'listadoetapas', component: ListarEtapasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//En esta constante metemos todas los componentes de las rutas y así en el app.module solo tendremos que importar esta...
export const routingComponents = [AltaCuadernoComponent, MostrarCuadernoComponent, EliminarCuadernoComponent, ModificarCuadernoComponent];
