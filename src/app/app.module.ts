import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Conexión http
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF } from '@angular/common';
import { environment } from "../environments/environment";
/*
  OBSOLETO
import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';
import { MostrarCuadernoComponent } from './mostrar-cuaderno/mostrar-cuaderno.component';
*/
//Diseño
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Componentes
import { EliminarCuadernoComponent, DialogElementsExampleDialog } from './eliminar-cuaderno/eliminar-cuaderno.component';
import { MensajeBarComponent } from './mensaje-bar/mensaje-bar.component';
import { DescargarCuadernoComponent } from './descargar-cuaderno/descargar-cuaderno.component';

import { FormularioLoginComponent } from './formulario-login/formulario-login.component';


import { AltaPoblacionesComponent } from './alta-poblaciones/alta-poblaciones.component';
//import { ListadoPoblacionesComponent } from './listado-poblaciones/listado-poblaciones.component';
import { AltaVivenciasComponent } from './alta-vivencias/alta-vivencias.component';
import { ListarVivenciasComponent } from './listar-vivencias/listar-vivencias.component';
import { BorradoVivenciasComponent } from './borrado-vivencias/borrado-vivencias.component';
import { ModificarVivenciasComponent } from './modificar-vivencias/modificar-vivencias.component';
import { ConsultarVivenciasComponent } from './consultar-vivencias/consultar-vivencias.component';
import { AltaEtapaComponent } from './alta-etapa/alta-etapa.component';
import { BorradoEtapasComponent } from './borrado-etapas/borrado-etapas.component';
import { ListarEtapasComponent } from './listar-etapas/listar-etapas.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents, //<-- almacena todos los componentes de las rutas
    EliminarCuadernoComponent,
    DialogElementsExampleDialog,
    MensajeBarComponent,
    AltaPoblacionesComponent,
    FormularioLoginComponent,
    AltaVivenciasComponent,
    ListarVivenciasComponent,
    BorradoVivenciasComponent,
    ModificarVivenciasComponent,
    ConsultarVivenciasComponent,
    DescargarCuadernoComponent,
    AltaEtapaComponent,
    BorradoEtapasComponent,
    ListarEtapasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    //Imports de Materials..
    MatRippleModule,
    MatSliderModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.rutaHREF},
  ], //Si lo necesitamos utilizamos una URI personalizada...
  bootstrap: [AppComponent]
})
export class AppModule { }
