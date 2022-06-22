import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  currentUser$ = authState(this.auth);
  constructor(private auth:Auth ) { }

  login(email:any,password:any){
    return from(signInWithEmailAndPassword(this.auth,email,password));

  }
  logout(){
    return from(this.auth.signOut());
 }
 singUp(email:any,password:any){
  return from(createUserWithEmailAndPassword(this.auth,email,password));
 }
}
