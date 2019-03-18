import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authSerivce: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authSerivce.login(this.model).subscribe(next => {
      console.log("Logged in succesfully");
    }, error => {
      console.log("Failed to login");
    });
  }

}
