import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private toast:HotToastService,
    
    ) { }

  ngOnInit(): void {
  }
  get email (){
    return this.loginForm.get('email')
  }
  get password (){
    return this.loginForm.get('password')
  }
  //login funchtion
  submit(){
    if(!this.loginForm.valid){
      return;
    }
    const{email,password}=this.loginForm.value;
    this.authService.login(email,password).pipe(this.toast.observe({
      success:'Logged in successfully',
      loading:'is loading',
      error:'is fehlt to login',
    })).subscribe(()=>{
      this.router.navigate(['/user'])

    })

  }

}
