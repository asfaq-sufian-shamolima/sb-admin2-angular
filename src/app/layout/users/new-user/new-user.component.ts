import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  userInfo = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.pattern(/^(?:\+880|0)(?:13\d|14[0-9]|15\d|16\d|17\d|18\d|19\d)(?:\d{7})$/)]),
    rePassword: new FormControl('', [Validators.pattern(/^(?:\+880|0)(?:13\d|14[0-9]|15\d|16\d|17\d|18\d|19\d)(?:\d{7})$/)]),
  });

  toggleGeneratePasswordCheckbox = false;

  addUser() {
    alert(this.userInfo.value.name+this.userInfo.value.email);
  }

}
