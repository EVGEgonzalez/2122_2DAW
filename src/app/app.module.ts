import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';

import { environment } from './../environments/environment';


import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AltaCuadernoComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule, //No necesitamos routing, por lo que lo comentamos para evitar problemas con despliegue.
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.rutaHREF}], //Si lo necesitamos utilizamos una URI personalizada...
  bootstrap: [AppComponent]
})
export class AppModule { }
