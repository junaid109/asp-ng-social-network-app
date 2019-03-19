import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authSerivce: AuthService, public alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authSerivce.login(this.model).subscribe(next => {
      this.alertify.success("Logged in sucessfully");
      console.log("Logged in succesfully");
    }, error => {
      this.alertify.error(error);
      console.log("Failed to login");
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedin(){
    return this.authSerivce.loggedin();
  }

  logout(){
    this.alertify.message("Logged out sucessfully");
    localStorage.removeItem("token");
    console.log("logged out");
    this.router.navigate(['/home']);
  }

}
