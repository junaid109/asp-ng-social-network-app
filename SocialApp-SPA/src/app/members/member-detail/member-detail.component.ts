import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data =>
      {
        this.user = data['user'];
      });
  }

  // loadUser() {
  //   this.userService.getUser(this.route.snapshot.params['id']).subscribe((user: User) =>{
  //     this.user = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   })
  // }

}
