import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from '../service/authentication.service';

export function passwordMatch():ValidatorFn {
  return(control:AbstractControl ):ValidationErrors | null =>{
   const password = control.get('password')?.value;
   const confirmPassword = control.get('confirmPassword')?.value;
   if(password && confirmPassword && password !== confirmPassword){
    return { passwordDontMatch:true }
 
   }
   return null;
  };
  
}


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})

export class SingUpComponent implements OnInit {

  singIn =new FormGroup({
    name : new FormControl
    ('',[Validators.required,Validators.minLength(3)]),
    email : new FormControl
    ('',[Validators.required,Validators.email]),
    password : new FormControl
    ('',[Validators.required,Validators.minLength(6)]),
    confirmPassword : new FormControl
    ('',[Validators.required,Validators.minLength(6)]),
  },{validators : passwordMatch()})

  constructor( private auth:AuthenticationService,private toast:HotToastService,private router:Router) { }

  ngOnInit(): void {
  }

  get name (){
    return this.singIn.get('name')
  }
  get email (){
    return this.singIn.get('email')
  }
  get password (){
    return this.singIn.get('password')
  }
  get confirmPassword (){
    return this.singIn.get('confirmPassword')
  }
  submit(){
    if(!this.singIn.valid)return;
    const{name,email,password}=this.singIn.value;
    this.auth.singUp(name,email,password).pipe(
      this.toast.observe({
        success:'You have succesfule Sing In',
        loading:'Wait we Sing In',
        error:({message}) =>`${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/user']);
    })
  
  }

}
