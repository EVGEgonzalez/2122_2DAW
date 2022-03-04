import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 
  constructor(private http: HttpClient) { }
  /**
   * @function login 
   * @description Función login que recibe los datos introducidos por el usuario a través del formulario en forma de objeto y los convierte en JSON. Estos mismos son enviados al servidor.
   */

  public login(datos:Object){
    const url = environment.apiURL+'/php/controlador/c_login.php'
    const bodyJSON = JSON.stringify(datos)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Headers": "*"
      })
    }
    return this.http.post<any>(url, bodyJSON , httpOptions);
  }
  /**
   * @function alta 
   * @description Función alta que recibe los datos introducidos por el usuario a través del formulario en forma de objeto y los convierte en JSON. Estos mismos son enviados al servidor.
   */
  public alta(datos:Object){
    const url = environment.apiURL+'/php/controlador/c_usuarios.php'
    const bodyJSON = JSON.stringify(datos)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Headers": "*"
      })
    }
    return this.http.post<any>(url, bodyJSON , httpOptions);
  }
}
