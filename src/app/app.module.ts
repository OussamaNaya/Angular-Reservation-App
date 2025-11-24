import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the moduls to app.moduls
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    // add the moduls to app.moduls 
    HomeModule,
    ReservationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
