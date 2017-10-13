import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'taa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];
  error = '';

  constructor(private userService:UserService) { }

  ngOnInit() {
    /*
    this.userService.getUsers()
                    .subscribe(
                      data => this.users = data,
                      error => {
                        console.error(error);
                        this.error = error;
                      }
                    );
  }
  */

  this.userService.getUsers().then( data => this.users = data);
}

}
