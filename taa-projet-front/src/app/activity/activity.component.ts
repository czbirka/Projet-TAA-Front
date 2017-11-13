import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

import { ActivitiesService } from '../services/activities.service';
import { LieuService } from '../services/lieu.service';
import { AuthenticationService } from '../services/authentication.service';

import { Activite } from '../entities/activite';
import { Condition } from '../entities/condition';
import { User } from '../entities/user';



@Component({
  selector: 'taa-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {

  // Config object
  ihm = {

    // values for User Interface
    set : {
      regions: [],
      departements: [],
      lieux: []
    },

    // Ngactivite - values currently selected
    selected: {
      region: '',
      departement: '',
      lieu: '',
    }
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
    vent_sup: ''
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
      this.activite.vent_sup === undefined
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
        console.log('Erreur : Temp Min=' + this.activite.temp_min + ' > Temp Inf=' + this.activite.temp_min);
        return;
      }
      if (this.activite.temp_inf > this.activite.temp_sup) {
        console.log('Erreur : Temp Inf=' + this.activite.temp_inf + ' > Temp Sup=' + this.activite.temp_sup);
        return;
      }
      if (this.activite.temp_sup > this.activite.temp_max) {
        console.log('Erreur : Temp Sup=' + this.activite.temp_sup + ' > Temp Max=' + this.activite.temp_max);
        return;
      }

      if (this.activite.vent_min > this.activite.vent_min) {
        console.log('Erreur : Vent Min=' + this.activite.vent_min + ' > Vent Inf=' + this.activite.vent_min);
        return;
      }
      if (this.activite.vent_inf > this.activite.vent_sup) {
        console.log('Erreur : Vent Inf=' + this.activite.vent_inf + ' > Vent Sup=' + this.activite.vent_sup);
        return;
      }
      if (this.activite.vent_sup > this.activite.vent_max) {
        console.log('Erreur : Vent Sup=' + this.activite.vent_sup + ' > Vent Max=' + this.activite.vent_max);
        return;
      }

    // Si on arrive ici, tout va bien !
    this.newActivite = new Activite;

    this.newActivite.nom = this.activite.nom;
    this.newActivite.user = this.user;

    this.newActivite.lieux = [];
    this.newActivite.lieux.push({id: this.ihm.selected.lieu});

    this.newActivite.condition = new Condition;
    this.newActivite.condition.ventMin = Number(this.activite.temp_inf);
    this.newActivite.condition.ventInf = Number(this.activite.temp_max);
    this.newActivite.condition.ventSup = Number(this.activite.temp_min);
    this.newActivite.condition.ventMax = Number(this.activite.temp_sup);
    this.newActivite.condition.tempMin = Number(this.activite.vent_inf);
    this.newActivite.condition.tempInf = Number(this.activite.vent_max);
    this.newActivite.condition.tempSup = Number(this.activite.vent_min);
    this.newActivite.condition.tempMax = Number(this.activite.vent_sup);

    console.log(this.newActivite);

      this.submit();
  }

}
