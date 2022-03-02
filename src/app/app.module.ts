import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaVivenciasComponent } from './alta-vivencias/alta-vivencias.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { ListarVivenciasComponent } from './listar-vivencias/listar-vivencias.component';
import { BorradoVivenciasComponent } from './borrado-vivencias/borrado-vivencias.component';
import { ModificarVivenciasComponent } from './modificar-vivencias/modificar-vivencias.component';
import { ConsultarVivenciasComponent } from './consultar-vivencias/consultar-vivencias.component';
//import { HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AltaVivenciasComponent,
    ListarVivenciasComponent,
    BorradoVivenciasComponent,
    ModificarVivenciasComponent,
    ConsultarVivenciasComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    //HttpHeaders,
    FormsModule,
  ],
  providers: [{provide:APP_BASE_HREF, useValue: "/angularvivencias"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
