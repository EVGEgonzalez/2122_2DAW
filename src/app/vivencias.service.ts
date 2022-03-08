import { Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../environments/environment";
const httpOptions={
  headers:new HttpHeaders({
    "Content-Type":"application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class VivenciasService {

  constructor(private http : HttpClient) { }

  enviar(datos:any):Observable<any>{
    console.log('tron2');
    
    return this.http.post(environment.apiURL+'/index.php', datos, httpOptions)
    
   }

   recibir(url:string):Observable<any>{
    console.log('tron3');
    
    return this.http.get(url)
    
   }
}
