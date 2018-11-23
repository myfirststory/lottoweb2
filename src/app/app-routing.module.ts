import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes =[
    {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService]},
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [DashboardComponent,LoginComponent]