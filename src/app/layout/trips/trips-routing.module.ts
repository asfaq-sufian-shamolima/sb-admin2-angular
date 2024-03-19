import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { NewTripComponent } from './new-trip/new-trip.component';

const routes: Routes = [
  {
    path: 'list',
    component: TripListComponent
  },
  {
    path: 'add',
    component: NewTripComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
