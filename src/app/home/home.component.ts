import { Component, OnInit } from '@angular/core';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
comment="";
postcomment = [];

post(){
  this.postcomment.push(this.comment);
  this.comment="";
}
  constructor() { }

  ngOnInit(): void {
  }

}
