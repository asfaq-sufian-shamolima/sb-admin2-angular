import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportListComponent } from './transport-list/transport-list.component';
import { NewTransportComponent } from './new-transport/new-transport.component';

const routes: Routes = [
  {
    path: '',
    component: TransportListComponent
  },
  {
    path: 'add',
    component: NewTransportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportsRoutingModule { }
