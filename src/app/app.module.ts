import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaCuadernoComponent } from './alta-cuaderno/alta-cuaderno.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from './../environments/environment';

import { HttpClientModule } from '@angular/common/http';


import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AltaCuadernoComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.rutaHREF}], //Si lo necesitamos utilizamos una URI personalizada...
  bootstrap: [AppComponent]
})
export class AppModule { }
