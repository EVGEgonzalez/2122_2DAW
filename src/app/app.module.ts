import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from './../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*
  OBSOLETO
import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';
import { MostrarCuadernoComponent } from './mostrar-cuaderno/mostrar-cuaderno.component';
*/
//Diseño
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core'; 


@NgModule({
  declarations: [
    AppComponent,
    routingComponents, //<-- almacena todos los componentes de las rutas
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
    MatDialogModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: environment.rutaHREF},
  ], //Si lo necesitamos utilizamos una URI personalizada...
  bootstrap: [AppComponent]
})
export class AppModule { }
