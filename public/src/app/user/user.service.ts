import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from './user';

import "rxjs";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http:Http
  ) { }

  create(user: User) {
    let promise = new Promise((resolve, reject) => {
      this._http.post('/users', user)
      .toPromise()
      .then(
        res => {
          resolve(res.json());
        }
      )
    });
    return promise;
  }

  destroy(user: User) {
    let promise = new Promise((resolve, reject) => {
      this._http.delete('/users/' + user._id)
      .toPromise()
      .then(
        res => {
          resolve(res.json());
        }
      )
    });
    return promise;
  }

  update(user: User) {
    let promise = new Promise((resolve, reject) => {
      this._http.put('/users/' +  user._id, user)
      .toPromise()
      .then(
        res => {
          resolve(res.json());
        }
      )
    });
    return promise;
  }

  getUsers() {
    let promise = new Promise((resolve, reject) => {
      this._http.get('/users')
      .toPromise()
      .then(
        res => {
          resolve(res.json());
        }
      )
    });
    return promise;
  }

  getUser(user: User) {
    return this._http.get('/users/' + user._id)
      .pipe(
        map(data => data.json())
      ).subscribe(res => console.log(res));
  }

}
