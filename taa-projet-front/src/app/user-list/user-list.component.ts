import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

import { ActivitiesService } from '../services/activities.service';
import { LieuService } from '../services/lieu.service';
import { AuthenticationService } from '../services/authentication.service';

import { Activite } from '../entities/activite';
import { User } from '../entities/user';



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

    // Ngactivite - values currently selected
    selected: {}
  };

  activite = {
    nom: '',
    temp_inf: '',
    temp_max: '',
    temp_min: '',
    temp_sup: '',
    vent_inf: '',
    vent_max: '',
    vent_min: '',
    vent_sup: '',
    user_idIndex: -1
  };

  user: User;
  newActivite: Activite;

  constructor(
    private activitiesService: ActivitiesService,
    private alertService: AlertService,
    private lieuService: LieuService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.user = this.authenticationService.getUser();
    this.lieuService.getRegions().then( response => {
      this.ihm.set.regions = response;
    });
  }

  log(logMe: any): void {
    this.user = this.authenticationService.getUser();
    this.activite.user_idIndex = this.user.id;
    console.log(logMe);
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


  submit() {
    this.activitiesService.create(this.newActivite)
      .subscribe(
      data => {
        this.alertService.success('activity successful saved', true);
        // this.router.navigate(['/activities']);
      },
      error => {
        this.alertService.error(error);
      });
  }

  performControl() {
    console.log(this.activite);

    // Si le formulaire n'a pas été passé
    if (this.activite === undefined) {
      console.log('Erreur lors de l\'envoi du formulaire');
      return;
    } else if ( // S'il manque un champ
      this.activite.nom === undefined ||
      this.activite.temp_inf === undefined ||
      this.activite.temp_max === undefined ||
      this.activite.temp_min === undefined ||
      this.activite.temp_sup === undefined ||
      this.activite.vent_inf === undefined ||
      this.activite.vent_max === undefined ||
      this.activite.vent_min === undefined ||
      this.activite.vent_sup === undefined ||
      this.activite.user_idIndex === undefined
    ) {
      console.log('Veuillez remplir tous les champs !');
      return;
    }

    // On vérifie que des valeurs numériques ont été passées
      if (isNaN(Number(this.activite.temp_inf))) {
        console.log('Temp Inf doit être un entier');
        return;
      }
      if (isNaN(Number(this.activite.temp_max))) {
        console.log('Temp Max doit être un entier');
        return;
      }
      if (isNaN(Number(this.activite.temp_min))) {
        console.log('Temp Min doit être un entier');
        return;
      }
      if (isNaN(Number(this.activite.temp_sup))) {
        console.log('Temp Sup doit être un entier');
        return;
      }
      if (isNaN(Number(this.activite.vent_inf))) {
        console.log('Vent Inf doit être un entier');
        return;
      }
      if (isNaN(Number(this.activite.vent_max))) {
        console.log('Vent Max doit être un entier');
        return;
      }
      if (isNaN(Number(this.activite.vent_min))) {
        console.log('Vent Min doit être un entier');
        return;
      }
      if (isNaN(Number(this.activite.vent_sup))) {
        console.log('Vent Sup doit être un entier');
        return;
      }

      if (this.activite.temp_min > this.activite.temp_min) {
        console.log('Erreur : Temp Min > Temp Inf');
        return;
      }
      if (this.activite.temp_inf > this.activite.temp_sup) {
        console.log('Erreur : Temp Inf > Temp Sup');
        return;
      }
      if (this.activite.temp_sup > this.activite.temp_max) {
        console.log('Erreur : Temp Sup > Temp Max');
        return;
      }

      if (this.activite.vent_min > this.activite.vent_min) {
        console.log('Erreur : Vent Min > Vent Inf');
        return;
      }
      if (this.activite.vent_inf > this.activite.vent_sup) {
        console.log('Erreur : Vent Inf > Vent Sup');
        return;
      }
      if (this.activite.vent_sup > this.activite.vent_max) {
        console.log('Erreur : Vent Sup > Vent Max');
        return;
      }

    // Si on arrive ici, tout va bien !
    this.newActivite = new Activite;
    this.newActivite.nom = this.activite.nom;
    this.newActivite.temp_inf = Number(this.activite.temp_inf);
    this.newActivite.temp_max = Number(this.activite.temp_max);
    this.newActivite.temp_min = Number(this.activite.temp_min);
    this.newActivite.temp_sup = Number(this.activite.temp_sup);
    this.newActivite.vent_inf = Number(this.activite.vent_inf);
    this.newActivite.vent_max = Number(this.activite.vent_max);
    this.newActivite.vent_min = Number(this.activite.vent_min);
    this.newActivite.vent_sup = Number(this.activite.vent_sup);
    this.newActivite.user_idIndex = this.activite.user_idIndex ;

      console.log(this.newActivite);
      

    this.submit();
  }

}
