import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  login(e){
    e.preventDefault()
    const target=e.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.auth.checkUser(username,password)
  }

}
