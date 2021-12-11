import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserLogin } from 'src/app/models/login.model';
import { userLogin } from 'src/app/Store/actions/login.action';
import { userRegister } from 'src/app/Store/actions/register.action';
import { typeLogin } from 'src/app/Store/selectors/login.selector';
import { typeRegister } from 'src/app/Store/selectors/register.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../assets/mycss/login.css'
]
})
export class LoginComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  isSignUpClick: boolean = false;
  isPassword: boolean = false;
  isEmail: boolean = false;

  isPassword_Register: boolean = false;
  isEmail_Register: boolean = false;
  isName_Register: boolean = false;

  ngOnInit(): void {
    this.loginFormData.valueChanges.subscribe(data => {
      this.isPassword = data['password'] === ''? true : false;
      this.isEmail = data['email'] === ''? true: false;
    });
    this.registerFormData.valueChanges.subscribe(data => {
      this.isName_Register = data['name'] ===''? true: false;
      this.isPassword_Register = data['password'] === ''? true : false;
      this.isEmail_Register = data['email'] === ''? true: false;
    });
  }

  OnSignUpClick() {
    this.isSignUpClick = true;
  }

  OnSignInClick(){
    this.isSignUpClick = false;
  }

  loginFormData = new FormGroup({
    email: new FormControl(''),  //binding data formControlName phone
    password: new FormControl(''),//binding data formControlName password
  });
  registerFormData = new FormGroup({
    name: new FormControl(''),  //binding data formControlName
    email: new FormControl(''),  //binding data formControlName phone
    password: new FormControl(''),//binding data formControlName password
  });

  registerSubmit(){
    const userAccount = {
      name: this.registerFormData['value']['name'],
      email: this.registerFormData['value']['email'],
      password: this.registerFormData['value']['password']
    }
    this.store.dispatch(userRegister({ userRegister: userAccount }));
    this.store.select(typeRegister).subscribe(data => {
      if(data != undefined){
        console.log(data);
        if(data['data'] === 1) {
          this.router.navigateByUrl('Dashboard/Home');
        }
      }  
    })
  }

  onSubmitLogin(){
    const userAccount: UserLogin = {
      email: this.loginFormData['value']['email'],
      password: this.loginFormData['value']['password']
    }

    this.store.dispatch(userLogin({ loginData: userAccount}));
    this.store.select(typeLogin).subscribe(data => {
      if(data['data'] === 1) {
        this.router.navigateByUrl('Dashboard/Home');
      }
    })
  }

}
