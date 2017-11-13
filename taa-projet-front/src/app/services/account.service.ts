import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../entities/user';

@Injectable()
export class AccountService {

  BASE_URL = 'http://localhost:9200';
  constructor(private http: Http) { }

  create(user: User) {
      return this.http.post(this.BASE_URL + '/account/register', user, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
      // create authorization header with jwt token
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
          const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
      }
  }
}
