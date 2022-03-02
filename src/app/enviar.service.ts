import { Injectable } from '@angular/core';
//Módulos necesarios para la comunicación AJAX
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnviarService {

  constructor(private http: HttpClient) { }

  public enviar(texto:any){
    console.log(`EnviarService.enviar(${texto})`)
    /*const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/etapas_Controlador.php'*/
    const url = 'http://localhost/Angular-Etapas/php/controlador/etapas_Controlador.php'
    const datos ={
      'nombre':'altaEtapa',
      'idEtapa': texto[0],
      'duracion':texto[1],
      'longitud':texto[2],
      'idPoblacionInicio':texto[3],
      'idPoblacionFinal':texto[4]
    }

    const bodyJSON = JSON.stringify(datos)
   /* const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }*/
    console.log(bodyJSON)
    return this.http.post<any>(url, bodyJSON );
  }

  public recibir(){
    /*const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/etapas_Controlador.php'*/
    const url = 'http://localhost/Angular-Etapas/php/controlador/etapas_Controlador.php'
    const respuesta={
      'accion':'select',

    }
    const  bodyJSON = JSON.stringify(respuesta)
    //console.log(bodyJSON)
    return this.http.post<any>(url,bodyJSON)
  }
  public borrar(idPoblacion:any){
     /*const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/etapas_Controlador.php'*/
     const url = 'http://localhost/Angular-Etapas/php/controlador/etapas_Controlador.php'
     const respuesta={
       'accion':'borrar',
        'idPoblacion':idPoblacion,
     }
     const  bodyJSON = JSON.stringify(respuesta)
     //console.log(bodyJSON)
     return this.http.post<any>(url,bodyJSON)
  }
  public recibirEtapas(){
    /*const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/etapas_Controlador.php'*/
    const url = 'http://localhost/Angular-Etapas/php/controlador/etapas_Controlador.php'
    const respuesta={
      'accion':'selectEtapas',

    }
    const bodyJSON = JSON.stringify(respuesta)
    //console.log(bodyJSON)
    return this.http.post<any>(url,bodyJSON)
  }
}
