import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private login: LoginService) { }

  ngOnInit(): void {
  }

  email: any;
  password: any;
  value: boolean = true;
  check: any;

  toggleToRegister() {
    this.router.navigate(['register']);
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    
  this.email = this.loginForm.value.email;
  this.password = this.loginForm.value.password;

  this.check = this.login.getUserdetails();
  
  if(this.email === this.check.email && this.password === this.check.password) {
    this.router.navigate(['dashboard']);
  }
    
    
  
}

}
