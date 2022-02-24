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

  //Este método se usará proximamente, y se liberará el método POST para casos generales...
  public crearCuaderno(url:string, body:string)
  {

    let test = this.post(url, body);
    console.log(test);
    
  }

  /**
   * Inicia la llamada AJAX
   * @param url URL a pasar
   * @param body Información a pasar...
   * @returns 
   */
  public post(url:string, body:string) {
    return this.http.post<any>(url, body , httpOptions).subscribe(data => {
      console.log(data)
    });
  }

  /**
   * Método que devuelve un observable con los datos...
   * @param url 
   * @param body 
   * @returns 
   */
  public mostrarVivenciasCuaderno(url:string, body:string) : Observable<CuadernoModel> {
    return this.http.post<any>(url, body , httpOptions);
  }
}