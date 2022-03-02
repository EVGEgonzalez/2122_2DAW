import { Injectable } from '@angular/core';


//Módulos necesarios para la comunicación AJAX
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/*
  Los servicios se generan con el comando: ng generate service nombre_servicio
  Solo tienen el fichero ts.
  Debe importarse en el módulo (app.module.ts)
*/

@Injectable({
  providedIn: 'root'
})
export class Servicio1 {

  constructor(private http: HttpClient) { }

  enviar(url: string, datos: any){
    //console.log('tron2');
    //console.log(datos);

    //console.log(datos["nombre"]);
    //console.log(datos["descripcion"]);
    
    

    const dato = {
        'nombre': datos["nombre"],
        'descripcion': datos["descripcion"]
    }
    

    const bodyJSON = JSON.stringify(datos)
    

    return this.http.post<any>(url, bodyJSON);
  }

  recibir(url:string):Observable<any>{
    console.log('tron3');
    

    return this.http.get(url);
  }
}
