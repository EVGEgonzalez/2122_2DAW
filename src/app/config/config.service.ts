import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 
  constructor(private http: HttpClient) { }

  public login(datos:Object){
    const url = '../php/login.php'
    const bodyJSON = JSON.stringify(datos)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    }
    return this.http.post<any>(url, bodyJSON , httpOptions);
  }

  public alta(datos:Object){
    const url = '../php/controlador_alta.php'
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
