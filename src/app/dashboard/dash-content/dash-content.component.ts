import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.css']
})
export class DashContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

addUser(){
  this.router.navigateByUrl("dashboard/adduser");
}

}
