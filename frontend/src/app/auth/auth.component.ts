import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private readonly auth : AuthService,
    private readonly route: Router
  ) { }


  state: boolean = false

  loginInfo: string = 'Manager'
  other: string = 'Employee'

  changeUser(){
    switch (this.state) {
      case true:
        this.state = false;
        this.loginInfo ='Employee';
        this.other = 'Manager'
        break;

      case false:
        this.state = true
        this.loginInfo = 'Manager'
        this.other = 'Employee'
        break;
    }
  }

  userLogin = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    type: new FormControl('')
  })

  login(){

    if(this.userLogin.valid){
      this.userLogin.patchValue({type: this.loginInfo})
      alert(JSON.stringify(this.userLogin.value))
      this.auth.user(this.userLogin.value).subscribe((data: any)=>{
        if(data.email){
          localStorage.setItem("user",data.email)
          this.route.navigate([`/${this.loginInfo.toLowerCase()}`]);
        }
      })

      // todo: redirect to either employee / manager
    }else{
      // todo: do something
    }
  }
  ngOnInit(): void {
  }

}
