import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from "../app-routing.module";
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterLink
  ],
  // add the tag exports for us the Home componant at other componants.
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
