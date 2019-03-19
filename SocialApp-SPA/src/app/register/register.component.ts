import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){ 
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success("Registration sucessful");
      console.log("registration sucessful");
    }, error => {
      this.alertify.error(error);
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message("Cancelled register");
    console.log("cancelled");
  }

}
