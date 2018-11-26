import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  constructor() { }

  addUserMoney(money){
    alert("เพิ่มเงินให้ "+sessionStorage.getItem("username")+" เป็นจำนวน "+money)

  }
}