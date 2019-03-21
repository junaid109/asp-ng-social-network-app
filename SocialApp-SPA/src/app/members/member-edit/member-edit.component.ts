import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;

  @ViewChild('editForm') editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadnotification($event: any) {
    if(this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private userService: UserService
                             ,private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['data'];
    });
  }

  updateUser(){
      this.userService.updateUser(this.authService.decodedToken.name.id, this.user).subscribe(next => {
        this.alertify.success("Profile has been updated!");
        this.editForm.reset(this.user);
      }, error => {
        this.alertify.error(error);
      });
  
  }

}
