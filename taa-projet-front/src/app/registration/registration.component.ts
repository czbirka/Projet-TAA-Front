import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AccountService } from '../services/account.service';

import { User } from '../entities/user';

@Component({
  selector: 'taa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: any = {};
  loading = false;
  newUser: User;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) { }

    ngOnInit() {
    }

  register() {
    this.loading = true;
    this.accountService.create(this.newUser)
      .subscribe(
        data => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/login']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
      }

    performControl() {
    console.log(this.model);

    // Si le formulaire n'a pas été passé
    if (this.model === undefined ) {
      console.log('Erreur lors de l\'envoi du formulaire');
      return;
    } else if ( // S'il manque un champ
      this.model.email1 === undefined ||
      this.model.email2 === undefined ||
      this.model.firstName === undefined ||
      this.model.lastName === undefined ||
      this.model.password1 === undefined ||
      this.model.password2 === undefined ||
      this.model.username === undefined ) {
          console.log('Veuillez remplir tous les champs !');
          return;
      }

    // Email différents
    if (this.model.email1 !== this.model.email2) {
      console.log('Les adresses email sont différentes !');
      return;
    }

    // Password différents
    if (this.model.password1 !== this.model.password2) {
      console.log('Les mots de passe sont différents !');
      return;
    }

    // Si on arrive ici, tout va bien !
    this.newUser = new User;
    this.newUser.nom = this.model.lastName;
    this.newUser.prenom = this.model.firstName;
    this.newUser.login = this.model.username;
    this.newUser.motDePasse = this.model.password1;
    this.newUser.email = this.model.email1;

    this.register();
  }

}

