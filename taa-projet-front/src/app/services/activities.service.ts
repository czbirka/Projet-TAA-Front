import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActivitiesService {

  BASE_URL = 'http://localhost:9200/'; // Url de notre backend spring

  constructor(private http: Http) { }

    getActivities(): Promise<any[]> {
      return this.http.get(this.BASE_URL + 'activite')
      .map(res => res.json())
      .toPromise()
      .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }

}
