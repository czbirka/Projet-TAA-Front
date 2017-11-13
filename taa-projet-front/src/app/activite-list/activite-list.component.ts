import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'ng2-accordion';
import { ActivitiesService } from '../services/activities.service';
import { UserService } from '../services/user.service';

import { User } from '../entities/user';
import { Activite } from '../entities/activite';

@Component({
  selector: 'taa-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.css']
})

export class ActiviteListComponent implements OnInit {
  isGroupOpen = false;
  user: User;
  UserId: number;
  myActivities: Array<Activite>;

  constructor(
    private activitiesService: ActivitiesService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUserByLogin(localStorage.getItem('userLogin')).then(user => {
      this.user = user;
      this.activitiesService.getActivitiesByUserId(this.user.id).then( response => {
        this.myActivities = response;
      });
    });
  }
}
