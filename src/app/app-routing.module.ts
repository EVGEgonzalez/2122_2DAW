import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';
import { EliminarCuadernoComponent } from './eliminar-cuaderno/eliminar-cuaderno.component';
import { ModificarCuadernoComponent } from './modificar-cuaderno/modificar-cuaderno.component';
import { MostrarCuadernoComponent } from './mostrar-cuaderno/mostrar-cuaderno.component';

const routes: Routes = [
  { path: 'alta', component: AltaCuadernoComponent },
  { path: 'mostrar', component: MostrarCuadernoComponent },
  { path: 'eliminar', component: EliminarCuadernoComponent },
  { path: 'modificar', component: ModificarCuadernoComponent },
  {path: 'login', component: FormularioLoginComponent},
  {path: 'alta', component: FormularioLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//En esta constante metemos todas los componentes de las rutas y así en el app.module solo tendremos que importar esta...
export const routingComponents = [AltaCuadernoComponent, MostrarCuadernoComponent, EliminarCuadernoComponent, ModificarCuadernoComponent];
