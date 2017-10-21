import { Component, OnInit } from '@angular/core';

import { ActivitiesService } from '../services/activities.service';
import { UserService } from '../services/user.service';
import { LieuService } from '../services/lieu.service';

import { User } from '../entities/user';

@Component({
  selector: 'taa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  lieux: any[];
  activities: any[];
  selectedLieu: any;

  constructor(private userService: UserService,
    private lieuListService: LieuService,
    private activitiesService: ActivitiesService ) { }

  ngOnInit() {
    this.userService.getUsers().then( response => {
      this.users = response;
    });

    this.lieuListService.getLieux().then( response => {
      this.lieux = response;
    });

    this.activitiesService.getActivities().then( response => {
      this.activities = response;
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
