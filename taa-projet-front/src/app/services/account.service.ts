import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../entities/user';

@Injectable()
export class AccountService {

  BASE_URL = 'http://localhost:9200';
  constructor(private http: Http) { }

  getAll() {
      return this.http.get(this.BASE_URL + '/user', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
      return this.http.get(this.BASE_URL + '/user/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
      return this.http.post(this.BASE_URL + '/user', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
      return this.http.put(this.BASE_URL + '/user/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
      return this.http.delete(this.BASE_URL + '/user/' + id, this.jwt()).map((response: Response) => response.json());
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
