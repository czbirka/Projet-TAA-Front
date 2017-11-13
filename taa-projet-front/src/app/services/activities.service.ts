import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Activite } from '../entities/activite';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActivitiesService {

  BASE_URL = 'http://localhost:9200'; // Url de notre backend spring

  constructor(private http: Http) { }

  getActivities(): Promise<any[]> {
    return this.http.get(this.BASE_URL + '/activite', this.jwt())
      .map(res => res.json())
      .toPromise()
      .catch(this.handleError);
  }
  
  getActivitiesByUserId(UserId: number): Promise<any[]> {
    return this.http.get(this.BASE_URL + '/activite/user/' + UserId, this.jwt())
      .map(res => res.json())
      .toPromise()
      .catch(this.handleError);
  }

  create(activite: Activite) {
    return this.http.post(this.BASE_URL + '/activite', activite, this.jwt())
    .map((response: Response) => response.json());
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
