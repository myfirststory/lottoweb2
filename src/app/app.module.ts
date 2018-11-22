import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    DashboardRoutingModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
