import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { HttpClient } from '@angular/common/http';
import { GlobalVarible } from 'src/models/models';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-add-money-user',
  templateUrl: './add-money-user.component.html',
  styleUrls: ['./add-money-user.component.css']
})
export class AddMoneyUserComponent implements OnInit {
  user:User;
newmoneyout=0;
  constructor(private router: Router,private http:HttpClient,private money:MoneyService) { }

  ngOnInit() {
    this.http.get<User>(GlobalVarible.host + "/api/User/List")
    .subscribe((data) => {
        this.user = data;
    });
  }
  userid=this.money.getUserId()
  username=this.money.getUserName()
  usermoney=this.money.getUserMoney()
  addingmoney(e){
    e.preventDefault()
    const target = e.target
    const newmoney=target.querySelector("#newmoney").value
    this.newmoneyout= +newmoney
    this.money.addMoney(newmoney,this.userid)
  }
}
