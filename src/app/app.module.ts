import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// add the moduls to app.moduls
import { HomeModule } from './home/home.module';
import { Reservation } from './models/reservation';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // add the RoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
