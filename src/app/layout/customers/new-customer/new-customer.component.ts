import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {
  customerInfo = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.pattern(/^(?:\+880|0)(?:13\d|14[0-9]|15\d|16\d|17\d|18\d|19\d)(?:\d{7})$/)),
    address: new FormControl('')
  });

  addCustomer() {
    alert(this.customerInfo.value.name+this.customerInfo.value.email+this.customerInfo.value.phone);
  }
}
