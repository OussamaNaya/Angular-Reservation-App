import { Component, OnInit } from '@angular/core';
// add these imports to the Form component
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{
    // create an instance of FormGroup to collect our form data.
    reservationForm : FormGroup = new FormGroup({});

    // Injecter FormBuilder and ReservationService dependency, to our componant.
    constructor(private formBuilder: FormBuilder, private reservationService: ReservationService){
    }

    // add the validator to reservationForm object.
    ngOnInit(): void {
      this.reservationForm = this.formBuilder.group({
          checkInDate: ['', Validators.required],
          checkOutDate: ['', Validators.required],
          guestName: ['', Validators.required],
          guestEmail: ['', [Validators.required, Validators.email]],
          roomNumber: ['', Validators.required],
      });
    }

    Submit(){
      if(this.reservationForm.valid)
      {
          let newReservation : Reservation = this.reservationForm.value;
          this.reservationService.addReservation(newReservation);
      }
    }
}
