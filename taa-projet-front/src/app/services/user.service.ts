import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  BASE_URL = 'http://localhost:8080/';

  constructor(private http:Http) { }

  getUsers(){
    return this.http.get(this.BASE_URL + 'sport')
                    .map(res => res.json());
                   //return this.http.get('data/user.json')
                    //.map(res => res.json());
  }
  
}
