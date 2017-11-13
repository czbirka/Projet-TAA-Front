import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LieuService {

  BASE_URL = 'http://localhost:9200'; // Url de notre backend spring

  constructor(private http: Http) { }

  getLieux(): Promise<any[]> {
    return this.http.get(this.BASE_URL + '/lieu', this.jwt())
      .map(res => res.json())
      .toPromise()
      .catch(this.handleError);
  }

  getDepartementLieux(codeDepartement: string): Promise<any[]> {
    return this.http.get(this.BASE_URL + '/lieu/departement/' + codeDepartement, this.jwt())
      .map(res => res.json())
      .toPromise()
      .catch(this.handleError);
  }

  getRegionDepartements(region: string): Promise<any[]> {
    return this.http.get(this.BASE_URL + '/departement/region/' + region, this.jwt())
      .map(res => res.json())
      .toPromise()
      .catch(this.handleError);
  }

  getRegions(): Promise<any[]> {
    return this.http.get(this.BASE_URL + '/region', this.jwt())
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
