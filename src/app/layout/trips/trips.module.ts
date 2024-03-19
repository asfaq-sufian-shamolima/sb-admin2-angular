import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripsRoutingModule } from './trips-routing.module';
import { TripListComponent } from './trip-list/trip-list.component';
import { NewTripComponent } from './new-trip/new-trip.component';


@NgModule({
  declarations: [
    TripListComponent,
    NewTripComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule
  ]
})
export class TripsModule { }
