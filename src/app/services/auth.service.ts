import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule,private router:Router) { }

  checkUser(username, password){
    if(username=="admin"&&password=="1234"){
      this.router.navigate(['/dashboard'])
      sessionStorage.setItem("loggedin","1")
    }
  }

  checktoken():boolean{
    if(sessionStorage.getItem("loggedin")=="1"){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }
  }

}
