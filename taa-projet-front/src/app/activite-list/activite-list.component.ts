import { Component } from '@angular/core';
import {AccordionModule} from 'ng2-accordion';
import { ActivitiesService } from '../services/activities.service';
import { AuthenticationService } from '../services/authentication.service';

import { User } from '../entities/user';
import { Activite } from '../entities/activite';

@Component({
  selector: 'taa-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.css']
})

export class ActiviteListComponent {
  isGroupOpen = false;
  user: User;
  UserId:number;
  myActivities: Array<Activite>;
  
  constructor(
    private activitiesService: ActivitiesService,
    private authenticationService: AuthenticationService,
  ) { }
  
  
  ngOnInit() {
    this.user = this.authenticationService.getUser();
    console.log(this.user);
    this.UserId = this.user.id;
    
    this.activitiesService.getActivitiesByUserId(this.UserId).then( response => {
      this.myActivities = response;
    });
    console.log(this.myActivities);
  }
  
    
    
  
}
