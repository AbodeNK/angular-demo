import { Injectable } from '@angular/core';
import { Storage,ref, getDownloadURL } from '@angular/fire/storage';
import { uploadBytes } from 'firebase/storage';
import { from, Observable,switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UplodImagesService {

  constructor(private storage:Storage) { }
  uplodImage( image:File,path:string):Observable<string>{
    const storageRef = ref(this.storage,path);
    const uploadTask = from(uploadBytes(storageRef,image));
    return uploadTask.pipe(
      switchMap((result)=> getDownloadURL(result.ref))
    );
  }

}
