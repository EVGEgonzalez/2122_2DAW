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
    const url = '../php/prueba.php'
    const datos ={
      'idEtapa': texto[0],
      'duracion':texto[1],
      'longitud':texto[2]
    }
    
    const bodyJSON = JSON.stringify(datos)
   /* const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }*/
    return this.http.post<any>(url, bodyJSON );
  }
}
