import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { InputsFormularioComponent } from './inputs-formulario/inputs-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioLoginComponent,
    InputsFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
