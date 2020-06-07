import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  email: any;
  password: any;

  private loggedInStatus = false;

  setLoggedIn(value: boolean) {
    return this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  values = {
    email: 'test@email.com',
    password: '123456'
  };

  getUserdetails() {
    return this.values;
  }
}
