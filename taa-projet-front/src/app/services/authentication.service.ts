import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    BASE_URL = 'http://localhost:9200';
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': ['application/json', 'text/plain']
    });

    token: string;

    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post(
            this.BASE_URL + '/account/login',
            JSON.stringify({ username: username, password: password }),
            {headers: this.headers}
        )
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.text();
            if (token !== undefined) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(token));
            }
            return token;
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
