import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { HomeComponent } from './home/home.component';
import { DataserviceService } from './dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    JobdetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
