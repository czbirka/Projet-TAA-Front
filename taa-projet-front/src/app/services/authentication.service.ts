import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserService } from '../services/user.service';
import { User } from '../entities/user';

@Injectable()
export class AuthenticationService {

    BASE_URL = 'http://localhost:9200';
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': ['application/json', 'text/plain']
    });

    token: string;
    isAuth: boolean;
    user: User;

    constructor(
        private http: Http,
        private userService: UserService
    ) {
        this.isAuth = false;
    }

    login(username: string, password: string) {
        return this.http.post(
            this.BASE_URL + '/account/login',
            JSON.stringify({ username: username, password: password }),
            { headers: this.headers }
        )
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            const token = {'token': response.text()};
            if (token !== undefined) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(token));
                localStorage.setItem('userLogin', username);
                this.isAuth = true;

                this.findUser();
            }
            return token;
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userLogin');
        this.isAuth = false;
    }

    isLogged() {
        return localStorage.getItem('userLogin');
    }

    getUser() {
        if (!this.user) {  this.findUser(); }
        return this.user;
    }

    private findUser() {
        this.userService.getUserByLogin(localStorage.getItem('userLogin')).then( theUser => {
            this.user = theUser;
        });
    }
}
