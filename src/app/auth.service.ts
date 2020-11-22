import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import {AppConstants} from './AppConstants';
import { Observable , Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  values = {
    email: 'test@email.com',
    password: '123456'
  };

  defaultUSerDetails(){
    // return AppConstants.defaultLogin; 
    return this.values;
  }

  getUserInfo() {
    return this.http.get('assets/userInfo.json');
  }

}
