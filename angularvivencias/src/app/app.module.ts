import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaVivenciasComponent } from './alta-vivencias/alta-vivencias.component';
import { HttpClientModule } from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AltaVivenciasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //HttpHeaders,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
