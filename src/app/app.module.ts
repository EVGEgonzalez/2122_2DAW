import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { InputsFormularioComponent } from './inputs-formulario/inputs-formulario.component';

//Conexión http
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FormularioLoginComponent,
    InputsFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// {provide:APP_BASE_HREF,useValue:"/ejercicios/Proyecto-Cuaderno/2122_2DAW/dist/camino-grupo-4"}