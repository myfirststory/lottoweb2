import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { GlobalVarible } from 'src/models/models';
import { User } from 'src/models/user';

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

}
