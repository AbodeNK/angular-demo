import { Injectable } from '@angular/core';
import { doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable, of } from 'rxjs';
import { productData } from '../data/newProductsData';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor( private fireStore:Firestore) { }
  addProduct(categories :productData):Observable<any>{
    const ref = doc(this.fireStore,'categories',categories.categories,'ProductsName',categories.ProductsName);
    return from(setDoc(ref,categories));
  }
  updateProduct(categories :productData):Observable<any>{
    const ref = doc(this.fireStore,'categories',categories.categories,'ProductsName',categories.ProductsName);
    return from(updateDoc(ref,{...categories}));
  }
  
}
