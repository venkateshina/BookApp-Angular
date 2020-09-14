import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service : LoginserviceService ,private toaster:ToastrService) { }

  ngOnInit(): void {
  }

show(){
  this.toaster.success('Successfully login','Book Shop',{timeOut :5000})
}
}
