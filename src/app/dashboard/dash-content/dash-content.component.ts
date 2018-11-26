import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { GlobalVarible } from 'src/models/models';
import { User } from 'src/models/user';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.css']
})
export class DashContentComponent implements OnInit {
  user:User;

  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit() {
    this.http.get<User>(GlobalVarible.host + "/api/User/List")
    .subscribe((data) => {
        this.user = data;
    });
  }

addUser(){
  this.router.navigateByUrl("dashboard/adduser");
}

moneyAdd(userid){
for (var number in this.user) {
  if (this.user.hasOwnProperty(number)) {
    var element = this.user[number];
    if(userid==element.id){
     console.log(element.name)
     sessionStorage.setItem("userid",element.id)
     sessionStorage.setItem("username",element.name)
     sessionStorage.setItem("usermoney",element.money)
     this.router.navigate(['/dashboard/addmoney'])
    }
  }
}
}

}
