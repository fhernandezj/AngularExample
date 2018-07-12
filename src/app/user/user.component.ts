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
  users: User[] = [
    new User(1, 'jose', 'alcantara', 'jose@mail.com'),
    new User(2, 'jose', 'alcantara', 'jose@mail.com'),
    new User(3, 'jose', 'alcantara', 'jose@mail.com')
  ];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    //this.getUsers();
  }

  getUsers(){
    /*this._userService.getUsers()
      .then(users => console.log(users))*/
  }

  create(user: User){
    console.log(user);
    this.users.push(user);
  }

  destroy(user: User){
    const index = this.users.indexOf(user);
    console.log(index);
    this.users.splice(index,1);
  }

}
