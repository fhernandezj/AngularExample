import { Component, OnInit } from '@angular/core';

import {UserService} from './user.service';
import { User } from './user';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers()
      .then(users => this.users = <User[]> users)
      .catch(err => console.log(err));
  }

  create(user: User){
    this._userService.create(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err))
  }

  destroy(user: User){
    console.log(user)
    this._userService.destroy(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err))
  }

  update(user){
    this._userService.update(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err))
  }

}
