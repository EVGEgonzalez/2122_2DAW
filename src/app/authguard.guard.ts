import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
//import { AuthService } from "./auth.service";
  
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) {}  
    canActivate(): boolean {  
        if (localStorage.getItem("login") == "true") {  
            this.router.navigate(["/mostrar"]);
            return true;
        }  
        this.router.navigate(["/login"]);
        return false;
        //return this.Authguardservice.gettoken();  
    }  
}