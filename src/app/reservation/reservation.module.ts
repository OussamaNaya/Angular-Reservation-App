import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
// add these imports to use it in ReservationFormComponent
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from '@angular/router';
// import thr Home Module to use his component in our reservation componants.
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    // add the FormsModule and ReactiveFormsModule.
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HomeModule
]
})
export class ReservationModule { }
