import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CuadernoModel } from "./model/cuadernoModel";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*"
  })
};

@Injectable({
  providedIn: 'root'
})

export class CuadernoService {

  constructor(private http:HttpClient) { }

  //OBSOLETO
  /*public post(url:string, body:string) {
    return this.http.post<any>(url, body , httpOptions).subscribe(data => {
      console.log(data)
    });
  }*/

  /**
   * Inicia una llamada de tipo POST devolviendo un observable con los datos...
   * @param url URL a pasar
   * @param body Información a pasar...
   * @returns 
   */
  public post(url:string, body:string): Observable<any> {
    return this.http.post<any>(url, body , httpOptions);
  }

  /**
   * Método que devuelve un observable con los datos...
   * OBSOLETO
   * @param url 
   * @param body 
   * @returns 
   */
  public mostrarVivenciasCuaderno(url:string, body:string) : Observable<CuadernoModel[]> {
    return this.http.post<any>(url, body , httpOptions);
  }
}