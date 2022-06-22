import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { UserDateService } from 'src/app/service/user-date.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})

export class SingUpComponent implements OnInit {
  singInForm =new FormGroup({
    firstName : new FormControl
    ('',[Validators.required,Validators.minLength(3)]),
    lastName : new FormControl
    ('',[Validators.required,Validators.minLength(3)]),
    email : new FormControl
    ('',[Validators.required,Validators.email]),
    password : new FormControl
    ('',[Validators.required,Validators.minLength(6)]),
    confirmPassword : new FormControl
    ('',[Validators.required,Validators.minLength(6)]),
  },{validators : passwordMatch()})

  constructor(private authservice:AuthServiceService,
    private router:Router,
    private toast:HotToastService,
    private userDate:UserDateService
    ) { }

  ngOnInit(): void {
  }
  get firstName (){
    return this.singInForm.get('firstName')
  }
  get lastName (){
    return this.singInForm.get('lastName')
  }
  get email (){
    return this.singInForm.get('email')
  }
  get password (){
    return this.singInForm.get('password')
  }
  get confirmPassword (){
    return this.singInForm.get('confirmPassword')
  }
  submit(){
    if(!this.singInForm.valid)return;
    const{firstName,lastName,email,password}=this.singInForm.value;
    this.authservice.singUp(email,password).pipe(
      switchMap(({ user: { uid } }) =>
      this.userDate.addUser({ uid, email, firstName,lastName })
    ),
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