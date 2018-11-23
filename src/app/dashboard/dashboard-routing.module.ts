import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashContentComponent } from './dash-content/dash-content.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddMoneyUserComponent } from './add-money-user/add-money-user.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuardChildService } from '../services/auth-guard-child.service';

const dashboardroutes: Routes =[
    {path: 'dashboard', component: DashboardComponent,canActivateChild:[AuthGuardChildService],
        children:[
            {path: '', component: DashContentComponent},
            {path: 'adduser', component: AddUserComponent},
            {path: 'addmoney', component: AddMoneyUserComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardroutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}
export const DashboardRoutingComponents = [DashContentComponent,AddUserComponent,AddMoneyUserComponent]