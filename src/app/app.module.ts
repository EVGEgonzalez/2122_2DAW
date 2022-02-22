import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Alta } from './alta.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:APP_BASE_HREF, useValue:"/prueba"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
