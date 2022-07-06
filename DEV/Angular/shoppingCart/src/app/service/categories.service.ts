import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable, of ,map} from 'rxjs';
import { productData } from '../data/newProductsData';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private angularFireStore:AngularFirestore) { }

  addProduct(categories :productData):Observable<any>{
    return from( this.angularFireStore.collection('Products').doc(categories.uid).set(categories));

  }
  updateProduct(categories :productData):Observable<any>{
    return from( this.angularFireStore.collection('Products').doc(categories.uid).update(categories));
  }
  deletProduct(categories :productData):Observable<any>{
    return from( this.angularFireStore.collection('Products').doc(categories.uid).delete());
  }

  getProducts(){
   return  this.angularFireStore.collection('Products').valueChanges()
  }


  
  
}

