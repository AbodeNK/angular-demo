import { Component, OnInit} from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {finalize } from 'rxjs/operators';
import { CategoriesService } from 'src/app/service/categories.service';
import { UplodImagesService } from 'src/app/service/uplod-images.service';
import { UserDateService } from 'src/app/service/user-date.service';
import { userData } from 'src/app/data/data';

@Component({
  selector: 'app-user-stting',
  templateUrl: './user-stting.component.html',
  styleUrls: ['./user-stting.component.scss']
})
export class UserSttingComponent implements OnInit {
    user=this.userDataService.userProfileDate;
  userPeofile=new FormGroup({
    firstName : new FormControl ('',[Validators.required,Validators.minLength(3)]),
    lastName : new FormControl ('',[Validators.required,Validators.minLength(3)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    phone : new FormControl('',[Validators.required]),
    address : new FormControl('',[Validators.required]),
    imageURL : new FormControl ('',[]),

  })


  constructor(private userDataService:UserDateService,
   private uplodImageService:UplodImagesService,
    private storage:AngularFireStorage,
    ) { }
  
  ngOnInit(): void {
    this.userDataService.userProfileDate.subscribe(user=>{
      this.userPeofile.patchValue({...user});
    })
    
    
  }
  get firstName(){
    return this.userPeofile.get('firstName')
  }
  get lastName(){
    return this.userPeofile.get('lastName')
  }
  get email(){
    return this.userPeofile.get('email') 
  }
  get phone(){
    return this.userPeofile.get('phone') 
  }
  get address(){
    return this.userPeofile.get('address') 
  }
  get imageURL(){
    return this.userPeofile.get('imageURL') 
  }

  save(user :userData){
   
    const{firstName,lastName,email,phone,address,imageURL}=this.userPeofile.value;
    const uid=user.uid
    this.userDataService.updateUser({firstName,lastName,email,phone,address,imageURL,uid}).subscribe;
   
  }
  
  uplodImage(event:any ,user:userData ){
      if(event.target.files[0]){
        const path ='image/shoppUser/'+user.uid;
        const storageRef = this.storage.ref(path);
        this.uplodImageService.uplodImage(event.target.files[0],path).pipe(
        finalize(() => {
           storageRef.getDownloadURL().subscribe((url)=>{
           this.userPeofile.patchValue({imageURL: url});
         })
        })
       ).subscribe()
      }else{
        this.userPeofile.patchValue({imageURL: 'assets/images/emptyP.jpg'});
      }
}
}
