import { Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { userData } from '../data/data';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserDateService {

  get userProfileDate():Observable<userData|null>{
    return this.authservice.currentUser$.pipe(
      switchMap(user=>{
        if(!user?.uid){
          return of(null);
        }
        const ref = doc(this.fireStore,'usersSopp',user?.uid);
        return docData(ref) as Observable<userData>; 
      })
    )

  }

  constructor(private fireStore:Firestore, private authservice:AuthServiceService) { }
  addUser(user :userData):Observable<any>{
    const ref = doc(this.fireStore,'usersSopp',user?.uid);
    return from(setDoc(ref,user));
  }
  updateUser(user :userData):Observable<any>{
    const ref = doc(this.fireStore,'usersSopp',user?.uid);
    return from(updateDoc(ref,{...user}));
  }
}