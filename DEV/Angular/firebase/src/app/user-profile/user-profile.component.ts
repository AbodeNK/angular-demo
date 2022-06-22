import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { User } from 'firebase/auth';
import { concatMap } from 'rxjs';
import { ProfileUser } from '../models/user.profile';
import { AuthenticationService } from '../service/authentication.service';
import { ImageUplodService } from '../service/image-uplod.service';
import { UsersService } from '../service/users.service';
@UntilDestroy()
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user=this.usersService.currentUserProfile$;
  profileForm = new FormGroup({
    uid : new FormControl(''),
    displayName : new FormControl(''),
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    phone : new FormControl(''),
    address : new FormControl(''),

  })
  constructor(private authService:AuthenticationService,
    private imageUploade:ImageUplodService,
    private toast:HotToastService,
    private usersService:UsersService
    ) { }

  ngOnInit(): void {
    this.usersService.currentUserProfile$.pipe(
      untilDestroyed(this)
    ).subscribe((user)=>{
      this.profileForm.patchValue({...user});
    })
  }
  uploadImage(event:any,user:ProfileUser){
    this.imageUploade.uplodImage(event.target.files[0],`image/profile/${user.uid}`).
    pipe(
      this.toast.observe(
        {
          loading:'Image is Loading',
          success:'Image is uploded',
          error: 'uplode Fehlt'
        }
      ),
      concatMap((photoURL)=>this.usersService.updateUser({uid:user.uid,photoURL}))
    ).subscribe();

  }
  saveProfile(){
    const profileData = this.profileForm.value;
    this.usersService.updateUser(profileData).pipe(
      this.toast.observe({
        loading:'Image is Loading',
        success:'profile Data is update',
        error: 'update Fehlt'
      })

    ).subscribe();

  }

}
