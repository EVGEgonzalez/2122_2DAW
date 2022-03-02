import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { ReactiveFormsModule } from '@angular/forms';

//Conexión http
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF } from '@angular/common';

import { AltaPoblacionesComponent } from './alta-poblaciones/alta-poblaciones.component';

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
    AltaPoblacionesComponent,
    FormularioLoginComponent,
    AltaVivenciasComponent,
    ListarVivenciasComponent,
    BorradoVivenciasComponent,
    ModificarVivenciasComponent,
    ConsultarVivenciasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{provide:APP_BASE_HREF, useValue:""}],
  bootstrap: [AppComponent]
})

export class AppModule { }
