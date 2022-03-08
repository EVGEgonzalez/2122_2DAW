import { Injectable } from '@angular/core';
//Módulos necesarios para la comunicación AJAX
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EnviarService {

  constructor(private http: HttpClient) { }

  public servicio(datos:any){
    const url = environment.apiURL+'/index.php'
    /*const url = 'http://localhost/Angular-Etapas/php/controlador/index.php'*/
    console.log(datos);

    const bodyJSON = JSON.stringify(datos)

    console.log(bodyJSON)
    return this.http.post<any>(url, bodyJSON );
  }


  /*public enviarImagen(imagenBase64: string): Observable<Response> {

    console.log(`enviar.uploadImage()`)
    const url ='http://localhost/Angular-Etapas/php/controlador/index.php'
    const datos ={
      'accion':'imagen',
      'imagen': imagenBase64
    }
    const bodyJSON = JSON.stringify(datos)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*'
      })
    }
    console.log(bodyJSON)
    return this.http.post<any>(url, bodyJSON );
  }*/



}
