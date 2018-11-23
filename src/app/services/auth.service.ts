import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule) { }

  checktoken():boolean{
    if(sessionStorage.getItem("loggedin")=="1"){
      return true;
    }else{
      return false;
    }
  }

}
