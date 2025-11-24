import { Component, OnInit } from '@angular/core';
// add these imports to the Form component
import { EmailValidator, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

    reservationForm : FormGroup = new FormGroup({});

    // Injecter FormBuilder dependency, to our componant.
    constructor(private FormBuilder : FormBuilder){
    }

    ngOnInit(): void {
      this.reservationForm = this.FormBuilder.group({
          CheckInDate: ['', Validators.required],
          CheckOutDate: ['', Validators.required],
          guestName: ['', Validators.required],
          guestEmail: ['', [Validators.required, Validators.email]],
          roomNumber: ['', Validators.required],
      });
    }

    Submit(){
      if(this.reservationForm.valid)
      {
          console.log('Submit valid !');
      }
    }
}
