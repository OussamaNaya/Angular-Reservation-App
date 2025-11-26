import { Component, OnInit } from '@angular/core';
// add these imports to the Form component
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{
    // create an instance of FormGroup to collect our form data.
    reservationForm : FormGroup = new FormGroup({});

    // Injecter FormBuilder, ReservationService and th Router dependency, to our componant.
    constructor(
      private formBuilder: FormBuilder, 
      private reservationService: ReservationService,
      private router : Router,
      private activatedRoute: ActivatedRoute
    ){
    }

    // add the validator to reservationForm object.
    ngOnInit(): void {
      // crete the groupe filter before read the data from the formular.
      this.reservationForm = this.formBuilder.group({
          checkInDate: ['', Validators.required],
          checkOutDate: ['', Validators.required],
          guestName: ['', Validators.required],
          guestEmail: ['', [Validators.required, Validators.email]],
          roomNumber: ['', Validators.required],
      });

      // check the id if existe
      let id = this.activatedRoute.snapshot.paramMap.get("id");
      if(id){
        let reservation = this.reservationService.getReservation(id);
        if(reservation){
            // Patch the values of reservation into the form.
            this.reservationForm.patchValue(reservation)
        }
      }
    }

    Submit(){
      if(this.reservationForm.valid)
      {
          // get the reservation from the formular.
          let newReservation : Reservation = this.reservationForm.value;

          // check the id if existe
          let id = this.activatedRoute.snapshot.paramMap.get("id");
          if(id){
              // Edit
              this.reservationService.updateReservation(id, newReservation);
          }else{
              // Create
              this.reservationService.addReservation(newReservation);
          }

          this.router.navigate(['/list'])
      }
    }
}
