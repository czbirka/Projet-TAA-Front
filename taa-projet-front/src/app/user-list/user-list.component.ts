import { Component, OnInit } from '@angular/core';

import { LieuService } from '../services/lieu.service';


@Component({
  selector: 'taa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // Config object
  ihm = {

    // values for User Interface
    set : {
      regions: [],
      departements: [],
      lieux: []
    },

    // NgModel - values currently selected
    selected: {}
  };

  constructor(private lieuService: LieuService) { }

  ngOnInit() {
    this.lieuService.getRegions().then( response => {
      this.ihm.set.regions = response;
    });
  }

  log(lieu: any): void {
    console.log(lieu);
  }

  onRegionSelected(region: string) {
    this.lieuService.getRegionDepartements(region).then( response => {
      this.ihm.set.departements = response;
    });
  }

  onDepartementSelected(departement: string) {
    this.lieuService.getDepartementLieux(departement).then( response => {
      this.ihm.set.lieux = response;
    });
  }


}
