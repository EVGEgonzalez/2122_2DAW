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

  public servicio(array:any){
    const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/index.php'
    /*const url = 'http://localhost/Angular-Etapas/php/controlador/index.php'*/
    const bodyJSON = JSON.stringify(array)

    console.log(bodyJSON)
    return this.http.post<any>(url, bodyJSON );
  }

  public enviar(texto:any){
    console.log(`EnviarService.enviar(${texto})`)
    const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/index.php'
    /*const url = 'http://localhost/Angular-Etapas/php/controlador/index.php'*/
    const datos ={
      'accion':'altaEtapa',
      'idEtapa': texto[0],
      'duracion':texto[1],
      'longitud':texto[2],
      'idPoblacionInicio':texto[3],
      'idPoblacionFinal':texto[4]
    }

    const bodyJSON = JSON.stringify(datos)

    console.log(bodyJSON)
    return this.http.post<any>(url, bodyJSON );
  }
  public enviarImagen(imagenBase64: string): Observable<Response> {
    /*const formData = new FormData();
    formData.append('image', image);
    return this.http.post('/api/v1/image-upload', formData);
    */
    console.log(`enviar.uploadImage()`)
    const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/index.php'
    /*const url ='http://localhost/Angular-Etapas/php/controlador/index.php'*/
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
  }
  public recibir(){
    const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/index.php'
    /*const url = 'http://localhost/Angular-Etapas/php/controlador/index.php'*/
    const respuesta={
      'accion':'select',

    }
    const  bodyJSON = JSON.stringify(respuesta)
    //console.log(bodyJSON)
    return this.http.post<any>(url,bodyJSON)
  }
  public borrar(idEtapa:any){
    const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/index.php'
     /*const url = 'http://localhost/Angular-Etapas/php/controlador/index.php'*/
     const respuesta={
       'accion':'borrar',
        'idEtapa':idEtapa,
     }
     const  bodyJSON = JSON.stringify(respuesta)
     //console.log(bodyJSON)
     return this.http.post<any>(url,bodyJSON)
  }
  public recibirEtapas(){
    const url = 'http://localhost/DWEC/2122_2DAW/php/controlador/index.php'
   /* const url = 'http://localhost/Angular-Etapas/php/controlador/index.php'*/
    const respuesta={
      'accion':'selectEtapas',
    }
    const bodyJSON = JSON.stringify(respuesta)
    //console.log(bodyJSON)
    return this.http.post<any>(url,bodyJSON)
  }
}
