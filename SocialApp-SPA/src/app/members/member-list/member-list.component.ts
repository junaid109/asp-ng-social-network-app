import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];
  
 constructor(private userSerice: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loadUsers(){
    this.userSerice.getUsers().subscribe((users: User[]) =>
    {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    })
  }

}
