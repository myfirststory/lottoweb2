import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashContentComponent } from './dash-content/dash-content.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddMoneyUserComponent } from './add-money-user/add-money-user.component';

@NgModule({
    imports: [
      CommonModule,
      DashboardRoutingModule
    ],
    declarations: [DashContentComponent,AddUserComponent,AddMoneyUserComponent]
  })
  export class DashboardModule{}