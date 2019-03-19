import { Component, OnInit } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log("registered");
  }

  cancel(){
    console.log("cancelled");
  }


}
