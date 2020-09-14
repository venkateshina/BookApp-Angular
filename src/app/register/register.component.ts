import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service : LoginserviceService,private toaster:ToastrService) { }
  show(){
    this.toaster.success('Successfully Registered','Book Shop',{timeOut :5000})
  }
  ngOnInit(): void {
  }

}
