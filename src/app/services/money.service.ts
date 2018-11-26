import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { GlobalVarible } from 'src/models/models';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  user:User;
  userid
  username
  usermoney

  constructor(private router:Router,private http:HttpClient) { }
  setUserId(userid){
    this.userid=userid
  }
  getUserId(){
    return this.userid
  }
  setUserName(username){
    this.username=username
  }
  getUserName(){
    return this.username
  }
  setUserMoney(usermoney){
    this.usermoney=usermoney
  }
  getUserMoney(){
    return this.usermoney
  }

  addMoney(money,userid){
    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + userid)
          .subscribe((data) => {
            this.user = data;
            this.user.money = (Number)(this.user.money) + (Number)(money);
            this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
              .subscribe(data => {
                alert("เพิ่มเงินให้ "+ this.user.name+" แล้ว เป็นจำนวน "+ money +" บาท");
                this.router.navigate(['/dashboard'])
              });
          });

  }
}