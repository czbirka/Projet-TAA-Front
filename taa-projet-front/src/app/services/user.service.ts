import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  BASE_URL = 'http://localhost:9200/';

  constructor(private http:Http) { }

  private headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': true 
});

  getUsers(){
    return this.http.get(this.BASE_URL + 'user',{headers: this.headers})
                    .map(res => res.json());
                   //return this.http.get('data/user.json')
                    //.map(res => res.json());
  }
  

}
