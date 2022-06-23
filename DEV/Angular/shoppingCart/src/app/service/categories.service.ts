import { Injectable } from '@angular/core';
import { doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { productData } from '../data/newProductsData';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private fireStore:Firestore) { }
  addProduct(categories :productData):Observable<any>{
    const ref = doc(this.fireStore,'categories');
    return from(setDoc(ref,categories));
  }
  updateProduct(categories :productData):Observable<any>{
    const ref = doc(this.fireStore,'categories',categories?.ProductsName);
    return from(updateDoc(ref,{...categories}));
  }
  
}
