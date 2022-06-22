import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 loginForm =new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(6)]),
 });
  constructor(
    private authService:AuthServiceService,
    private router:Router,
    private toast:HotToastService,
    
    ) { }

  ngOnInit(): void {
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  submit(){
    if(this.loginForm.invalid){
      return;
    }
    const {email,password}=this.loginForm.value;
    this.authService.login(email,password).pipe(this.toast.observe({
      success:'Logged in successfully',
      loading:'is loading',
      error:'is fehlt to login',
    })).subscribe(()=>{
      this.router.navigate(['/user'])
    })


  }
  

}
