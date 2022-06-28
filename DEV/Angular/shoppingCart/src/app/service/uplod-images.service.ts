import { Injectable, OnInit } from '@angular/core';
// import { Storage,ref, getDownloadURL } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { uploadBytes, UploadResult } from 'firebase/storage';
import { from, map, Observable,switchMap,finalize } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UplodImagesService  {
  
  // ngOnInit(): void {
  //   this.imageUrl('set');
  // }
  // getImageUrl:any='s' ;
  //  get imageUrl(){
  //   return this.getImageUrl;
  // } 
  //  set imageUrl(soheb){
  //    this.getImageUrl=soheb;
  //  }

  constructor(private storage:AngularFireStorage) { }
  uplodImage( image:File,path:string){
    const uploadTask =this.storage.upload(path, image);
   return uploadTask.snapshotChanges().pipe()
  }

  }

  



