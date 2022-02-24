import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from './../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';


import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {EliminarCuadernoComponent} from './eliminar-cuaderno/eliminar-cuaderno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AltaCuadernoComponent,
    EliminarCuadernoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.rutaHREF}], //Si lo necesitamos utilizamos una URI personalizada...
  bootstrap: [AppComponent]
})
export class AppModule { }
