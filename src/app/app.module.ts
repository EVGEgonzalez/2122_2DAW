import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from './../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF } from '@angular/common';

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

import { EliminarCuadernoComponent, DialogElementsExampleDialog } from './eliminar-cuaderno/eliminar-cuaderno.component';
import { MensajeBarComponent } from './mensaje-bar/mensaje-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Componentes
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';

//Conexión http

import { AltaPoblacionesComponent } from './alta-poblaciones/alta-poblaciones.component';
import { Alta } from './alta.service';

import { ConfigService } from './config/config.service';
import { AltaVivenciasComponent } from './alta-vivencias/alta-vivencias.component';
import { ListarVivenciasComponent } from './listar-vivencias/listar-vivencias.component';
import { BorradoVivenciasComponent } from './borrado-vivencias/borrado-vivencias.component';
import { ModificarVivenciasComponent } from './modificar-vivencias/modificar-vivencias.component';
import { ConsultarVivenciasComponent } from './consultar-vivencias/consultar-vivencias.component';
//import { HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents, //<-- almacena todos los componentes de las rutas
    EliminarCuadernoComponent,
    DialogElementsExampleDialog,
    MensajeBarComponent,
    AltaPoblacionesComponent,
    FormularioLoginComponent,
  ],
  imports: [
    MatRippleModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //Imports de Materials..
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
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
