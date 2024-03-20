import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SBSortableHeaderDirective } from './dirctives/sortable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NewCustomerComponent,
    CustomerListComponent,
    SBSortableHeaderDirective
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class CustomersModule { }
