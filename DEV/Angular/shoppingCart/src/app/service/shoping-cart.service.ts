import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { Order, productData } from '../data/newProductsData';
import { take } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {

  constructor(private angularFireStore:AngularFirestore ) { }

  addCart(){
    return  this.angularFireStore.collection('shopingCart').add({
      dataCreated:new Date().getTime()});

  }
   getCart(){
    let cartID = localStorage.getItem('cartID');
    return this.angularFireStore.doc('/shopingCart/'+cartID);
  
  }
  
  private async getOrAddCart(){
    let cartID = localStorage.getItem('cartID');
    if(!cartID){
      let result = await this.addCart();
      localStorage.setItem('cartID',result.id);
      return result.id;
  
    }else{
    return cartID;
  
    }
  }
  async addToCart(product){
    let cartID = await this.getOrAddCart();
      this.angularFireStore.collection('shopingCart').doc<Order>(cartID).set({
        dishes: [
       {  uid:product.uid,
          categories:product.categories,
          ProductsName:product.ProductsName,
          Price:product.Price,
          imageURL:product.imageURL}
        ]
    });
  }
  
  
}
