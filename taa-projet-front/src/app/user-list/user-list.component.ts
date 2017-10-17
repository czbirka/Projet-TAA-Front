import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { LieuListService } from '../services/lieu-list.service';

import { User } from '../entities/user';

@Component({
  selector: 'taa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  lieux: any[];
  selectedLieu: any;

  constructor(private userService: UserService, private lieuListService: LieuListService) { }

  ngOnInit() {
    this.userService.getUsers().then( response => {
      this.users = response;
    });

    this.lieuListService.getLieux().then( response => {
      this.lieux = response;
    });
  }

  selectLieu(lieu: any): void {
    this.selectedLieu = lieu;
    console.log(lieu);
  }

  log(lieu: any): void {
    console.log(lieu);
  }


}
