import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authSerivce: AuthService, public alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authSerivce.login(this.model).subscribe(next => {
      this.alertify.success("Logged in sucessfully");
      console.log("Logged in succesfully");
    }, error => {
      this.alertify.error(error);
      console.log("Failed to login");
    });
  }

  loggedin(){
    return this.authSerivce.loggedin();
  }

  logout(){
    this.alertify.message("Logged out sucessfully");
    localStorage.removeItem("token");
    console.log("logged out");
  }

}
