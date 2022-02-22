import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/*import { AppRoutingModule } from './app-routing.module';*/
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaEtapaComponent } from './alta-etapa/alta-etapa.component';

import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AltaEtapaComponent
    
  ],
  imports: [
    BrowserModule,
   /* AppRoutingModule,*/
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [{provide: APP_BASE_HREF,useValue:'/angular-etapas'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
