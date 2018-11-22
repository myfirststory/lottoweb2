import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    
    return false;
  }
}
