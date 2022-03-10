import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth : AuthService, private router:Router) {
  }

  /**
   * Comprueba si se puede activar la ruta o no...
   * @returns boolean 
   */
  canActivate() {
    
    if(!this.auth.isLogged()) {
      this.router.navigate(["login"]); 
      return false;
    }

    return true;
  }


  canLoad() {
    return true;
  }
}
