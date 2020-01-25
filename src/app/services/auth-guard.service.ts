import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.userIsAdmin()) {
      this.router.navigate(['not-authorized']);
      return false;
    }
    return true;
  }
  
}
