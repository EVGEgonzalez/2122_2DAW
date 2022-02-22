import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

export class AltaCuadernoService {

  constructor(private http:HttpClient) { }

  public post(url:string, body:string) {
    return this.http.post<any>(url, body , httpOptions).subscribe();
  }
}