import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class AuthGuardService implements CanActivate {
    constructor(public router: Router) {}

    canActivate(): boolean {
        

        //Login en base al almacenamiento en local del navegador...
        /*if (localStorage.getItem("logged") == "false" || localStorage.getItem("logged") == null) {
            this.router.navigate(['login']);
            return false;
        }*/

        //Comprobamos si está logueado en base a un token generado por JWT
        /*if(!this.isAuthenticated) {
            this.router.navigate(['login']);
            return false;
        }*/

        return true;
    }

    /*public isAuthenticated(): boolean {
        // Check whether the token is expired and return

        let token = localStorage.getItem('token'); 

        if(token == null ||token == undefined) token = undefined;
        
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }*/
}