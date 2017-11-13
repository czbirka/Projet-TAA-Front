import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../entities/user';

@Injectable()
export class UserService {

  BASE_URL = 'http://localhost:9200'; // Url de notre backend spring

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.BASE_URL + '/user', this.jwt())
      .map(res => res.json())
      .toPromise()
      .catch(this.handleError);
  }

  getUserByLogin(login: string): Promise<User> {
    return this.http.get(this.BASE_URL + '/user/login/' + login, this.jwt())
      .map(res => res.json())
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
