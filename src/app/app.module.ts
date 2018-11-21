import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { DashboardRoutingModule, DashboardRoutingComponents } from './dashboard/dashboard-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardRoutingComponents
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
