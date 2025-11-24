import { Component } from '@angular/core';
// add these imports to the Form component
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
    reservationForm : FormGroup = new FormGroup({});

    Submit(){
      alert('Submit method')
    }
}
