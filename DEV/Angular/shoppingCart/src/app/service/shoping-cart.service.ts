import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {   productData } from '../data/newProductsData';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../data/ShoppingCart';





@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {

  constructor(private db:AngularFirestore ,
    private router:Router,
    ) { }


async getCart(): Promise<Observable<ShoppingCart>> {
  let cartId = await this.getOrCreateCartId();
  return this.db
    .collection('shopping-carts/' + cartId + '/items')
    .valueChanges()
    .pipe(
      map((item) => {
        let cart: { items: any; dateCreated: number } = {
          items: {},
          dateCreated: null,
        };
        this.db
          .collection('shopping-carts')
          .doc<{ dateCreated: number }>(cartId)
          .valueChanges()
          .pipe(first())
          .subscribe((d) => {
            cart.dateCreated = d.dateCreated;
          });
        item.forEach((i: { product: productData; quantity: number }) => {
          return Object.assign(cart.items, {
            [i.product.uid]: { product: i.product, quantity: i.quantity },
          });
        });
        return new ShoppingCart(cart.items, cart.dateCreated);
        
      })
    );
   
}


async addToCart(product: productData) {
  this.updateItemQuantity(product, 1);
}

async removeFromCart(product: productData) {
  this.updateItemQuantity(product, -1);
}

private create() {
  return this.db.collection('shopping-carts').add({
    dateCreated: new Date().getTime(),
  });
}


async clearCart() {
  let cartId = await this.getOrCreateCartId();

  this.db
    .collection('shopping-carts/' + cartId + '/items')
    .valueChanges()
    .pipe(
      first(),
      map((p) => {
        return p.map((p: any) => {
          return p.product.uid;
        });
      })
    )
    .subscribe((productIdArray) => {
      productIdArray.forEach((productId: any) => {
        this.db
          .collection('shopping-carts/' + cartId + '/items')
          .doc(productId)
          .delete();
      });
    });
}

private async getOrCreateCartId(): Promise<string> {
  let cartId = localStorage.getItem('cartId');
  if (!cartId) {
    let res = await this.create();
    localStorage.setItem('cartId', res.id);

    return res.id;
  } else {
    return cartId;
  }
}

private getItem(cartId: string, productId: string) {
  return this.db.doc(`shopping-carts/${cartId}/items/${productId}`)

    
}

private async updateItemQuantity(product: productData, change: number) {
  let cartId = await this.getOrCreateCartId();
  let item$ = this.getItem(cartId, product.uid);

  item$
    .valueChanges()
    .pipe(first())
    .subscribe((item: any) => {
      let quantity = (item?.quantity || 0) + change;

      if (quantity === 0) {
        item$.delete();
      } else {
        item$.set({
          product: product,
          quantity: quantity,
        });
      }
    });
}
async getcartItem(){
  let cartId = await this.getOrCreateCartId();
  return this.db.collection('shopping-carts').doc(cartId).collection('items').valueChanges()
}
  
}
