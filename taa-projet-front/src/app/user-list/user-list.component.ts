import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../entities/user';

@Component({
  selector: 'taa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  this.userService.getUsers().then( response => {
    this.users = response;
  });
}

}
