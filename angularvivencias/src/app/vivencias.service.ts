import { Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VivenciasService {

  constructor(private http : HttpClient) { }

  enviar(url:string, datos:any):Observable<any>{
    console.log('tron2');
    
    return this.http.post(url, datos)
    
   }

   recibir(url:string):Observable<any>{
    console.log('tron3');
    
    return this.http.get(url)
    
   }
}
