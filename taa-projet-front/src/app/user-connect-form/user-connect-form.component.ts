import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'taa-user-connect-form',
  templateUrl: './user-connect-form.component.html',
  styleUrls: ['./user-connect-form.component.css']
})
export class UserConnectFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nom: '',
      prenom: '',
      login: '',
      motDePasse: '',
      email: ''
    });
  }

  userConnection() {
    console.log(this.form.value);
  }

}
