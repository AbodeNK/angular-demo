import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserInfo } from 'firebase/auth';
import { concatMap, from, Observable, of, pipe, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 currentUser = authState(this.auth);
  constructor( private auth:Auth) { }

  login(email:any,password:any){
     return from(signInWithEmailAndPassword(this.auth,email,password));
  }
  logout(){
     return from(this.auth.signOut());
  }
  singUp(name:string,email:any,password:any){
   return from(createUserWithEmailAndPassword(this.auth,email,password))
   .pipe (switchMap(({user}) => updateProfile(user,{displayName:name})));
  }
  uptadeProfileData(profileData:Partial<UserInfo>):Observable<any>{
   const user = this.auth.currentUser;
   return of(user).pipe(
      concatMap(user => {
      if(!user) throw new Error('Not Authenticated');
      return updateProfile(user,profileData);
      })
   )

  }
}
