import { Injectable } from '@angular/core';
import {Router,CanActivateChild} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChildService implements CanActivateChild {

  constructor(private router:Router, private auth:AuthService) { }

  canActivateChild(): boolean {
    if(!this.auth.checktoken()){
      this.router.navigateByUrl('/login')
      return false
    }else{
        return true
      }
  }
}
