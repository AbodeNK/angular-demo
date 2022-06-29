import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {

  constructor(private angularFireStore:AngularFirestore ) { }

  addToCart(){
    return  this.angularFireStore.collection('shopingCart').add({
      dataCreated:new Date().getTime()});

  }
  // private  getCart(cartID:string){
  //   return this.angularFireStore.doc('/shopingCart'+cartID);
  
  // }
  
  // private async getOrAddCart(){
  //   let cartID = localStorage.getItem('cartID');
  //   if(!cartID){
  //     let result = await this.addCart();
  //     localStorage.setItem('cartID',result.id);
  //     return result.id;
  
  //   }else{
  //   return cartID;
  
  //   }
  // }
  // async addToCart(product){
  //   let cartID = await this.getOrAddCart();
  //   let items$= this.angularFireStore.doc('/shopingCart'+cartID+'/items'+product.uid);
  //   items$.valueChanges().pipe(take(1)).subscribe(item=>{
  //     if(item){
  //       items$.update({quantity:item})
  //     }
  //   })
  
  // }
}
