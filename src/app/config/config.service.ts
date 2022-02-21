import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 

  constructor(private http: HttpClient) { 
    
  }

  public alta(correo:string, password:string){
    console.log(`Servicio1.enviar(${correo})`)
    const url = '../php/alta.php'
    const datos ={
      'correo': correo,
      'password': password
    }
    const bodyJSON = JSON.stringify(datos)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    }
    return this.http.post<any>(url, bodyJSON , httpOptions);
  }
  public login(correo:string, password:string){
    console.log(`Servicio1.enviar(${correo})`)
    const url = '../php/login.php'
    const datos ={
      'correo': correo,
      'password': password
    }
    const bodyJSON = JSON.stringify(datos)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    }
    return this.http.post<any>(url, bodyJSON , httpOptions);
  }
}
