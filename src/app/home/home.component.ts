import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private login: LoginService,private auth: AuthService) { }

  ngOnInit(): void {
  }
 
  email: any;
  password: any;
  value: boolean = true;
  check: any;
  isClicked: boolean = false;

  // toggleToRegister() {
  //   this.router.navigate(['register']);
  // }
 
  toggleTabs(tabContent) {
    if(tabContent == 'register') {
      this.isClicked = true;
    }else{
      this.isClicked = false;
    }
  }

  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  // registerForm = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   postcode: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmpassword: new FormControl('')

  // });

  onSubmit(Form,buttonValue) {
    
    debugger
    // localStorage.setItem('loginData',JSON.stringify(Form.value));

    let loginDataApi;
    let loginData;
    let registerdata = [];

    if(buttonValue == "Login") {
      loginDataApi = this.auth.defaultUSerDetails();
          loginData = Form.value;
          if(loginDataApi.email == loginData.email && loginDataApi.password == loginData.password) {
            this.router.navigate(['dashboard']);
          } else{
            console.log('failed');
          }
        
    } else if(buttonValue == "Register") {
      localStorage.setItem('registerData',JSON.stringify(Form.value));
    }
    
    
   
  
}

}
