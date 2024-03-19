import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportsRoutingModule } from './transports-routing.module';
import { TransportListComponent } from './transport-list/transport-list.component';
import { NewTransportComponent } from './new-transport/new-transport.component';


@NgModule({
  declarations: [
    TransportListComponent,
    NewTransportComponent
  ],
  imports: [
    CommonModule,
    TransportsRoutingModule
  ]
})
export class TransportsModule { }
