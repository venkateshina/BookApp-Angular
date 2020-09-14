import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('',[ Validators.required,Validators.email,] ),
    mobile: new FormControl('', [Validators.required,Validators.minLength(8)]),
    password: new FormControl('',[ Validators.required,Validators.email,])
   
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: ''
      
    });
  }
}
