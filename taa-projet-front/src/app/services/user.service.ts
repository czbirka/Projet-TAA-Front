import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../entities/user';

@Injectable()
export class UserService {

  BASE_URL = 'http://localhost:9200/';

  constructor(private http: Http) { }

  private headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': true 
});

  getUsers2(){
    return this.http.get(this.BASE_URL + 'user',{headers: this.headers})
                    .map(res => res.json());
                   //return this.http.get('data/user.json')
                    //.map(res => res.json());
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.BASE_URL + 'user',{headers: this.headers})
    .toPromise()
    .then(response => response.json().data as User[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}