import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { concatMap } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { ImageUplodService } from '../service/image-uplod.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user=this.authService.currentUser;
  constructor(private authService:AuthenticationService,private imageUploade:ImageUplodService,private toast:HotToastService) { }

  ngOnInit(): void {
  }
  uploadImage(event:any,user:User){
    this.imageUploade.uplodImage(event.target.files[0],`image/profile/${user.uid}`).
    pipe(
      this.toast.observe(
        {
          loading:'Image is Loading',
          success:'Image is uploded',
          error: 'uplode Fehlt'
        }
      ),
      concatMap((photoURL)=>this.authService.uptadeProfileData({photoURL}))
    ).subscribe();

  }

}
