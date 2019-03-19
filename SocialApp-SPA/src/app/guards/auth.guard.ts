import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) {

  }
  canActivate(): boolean{
    if(this.authService.loggedin()){
      return true;
    }

    this.alertify.error("You cant enter");
    this.router.navigate(['/home']);
    return false;
  }
}
