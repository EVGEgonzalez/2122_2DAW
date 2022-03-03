import { Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    
    return this.http.post('http://localhost/pruebaProxy/php/index.php?', datos, httpOptions)
    
   }

   recibir(url:string):Observable<any>{
    console.log('tron3');
    
    return this.http.get(url)
    
   }
}
