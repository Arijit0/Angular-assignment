import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private HttpService: HttpClient ) { }

    getUserInfo() {
      return this.HttpService.get('assets/userInfo.json');
    }
  
}
