import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})

export class ReservationListComponent implements OnInit{
    reservations: Reservation[] = [];

    // Inject the ReservationService.
    constructor(private reservationService : ReservationService){
    }
    
    ngOnInit(): void {
      this.reservations = this.reservationService.getReservations();
      
      console.log("ngOnInit => ")
      for (let r of this.reservations) {
        console.log(r);
      }
    }  

}
